import { NextApiRequest, NextApiResponse } from "next";
import { fetchOAuth2Token, postContactUsData } from "./sfcc/apiService";

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  const body = JSON.parse(req.body); 
  let { description, email, name, subject } = body;
  description = description || "QC verify";
  email = email || "ptt.tester88+01@gmail.com";
  name = name || "Thu Pham local machine test2";
  subject = "Click & Collect";


  const contactUsData = {
    "SuppliedName": name,
    "Identify_Record_Type__c": "1",
    "SuppliedEmail": email,
    "SuppliedPhone": "09888888",
    "Subject": subject,
    "Description": description,
    "Origin": "Web",
    "Priority": "Medium",
    "Type": "Product Feedback",
    "External_Site_ID__c": "asics-us",
    "SFCC_URL__c": "https://sfcc-us-dev-us.dev.asics.com/us/en-us/contact-us.html",
    "Brand__c": "asics",
  };

  try {
    const token = await fetchOAuth2Token();
    console.log("Token", token);
    if (!token) {
      throw new Error("Failed to retrieve OAuth token");
    }
    const caseData = await postContactUsData(token, contactUsData);
    res.status(200).json(caseData);
  } catch (error) {
    console.log("Error runs", error)
    res.status(500).json({ error: "Internal Server Error" });
  }
}