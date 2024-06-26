import { useTokens } from '../useTokens/index';
export function createShadows() {
    var ogDefault = useTokens();
    var shadowKeyUmbraOpacity = 0.2;
    var shadowKeyPenumbraOpacity = 0.14;
    var shadowAmbientShadowOpacity = 0.12;
    var createShadow = function () {
        var pixels = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pixels[_i] = arguments[_i];
        }
        var shadow = [
            "".concat(pixels[0], "px ").concat(pixels[1], "px ").concat(pixels[2], "px ").concat(pixels[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"),
            "".concat(pixels[4], "px ").concat(pixels[5], "px ").concat(pixels[6], "px ").concat(pixels[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"),
            "".concat(pixels[8], "px ").concat(pixels[9], "px ").concat(pixels[10], "px ").concat(pixels[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")
        ];
        return shadow.join(',');
    };
    var shadows = [
        'none',
        ogDefault.OuterEl1 || createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
        ogDefault.OuterEl2 || createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
        ogDefault.OuterEl3 || createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
        ogDefault.OuterEl4 || createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
        ogDefault.OuterEl5 || createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
        ogDefault.OuterEl6 || createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
        ogDefault.OuterEl7 || createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
        ogDefault.OuterEl8 || createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
        ogDefault.OuterEl9 || createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
        ogDefault.OuterEl10 || createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
        ogDefault.OuterEl11 || createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
        ogDefault.OuterEl12 || createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
        ogDefault.OuterEl13 || createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
        ogDefault.OuterEl14 || createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
        ogDefault.OuterEl15 || createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
        ogDefault.OuterEl16 || createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
        ogDefault.OuterEl17 || createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
        ogDefault.OuterEl18 || createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
        ogDefault.OuterEl19 || createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
        ogDefault.OuterEl20 || createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
        ogDefault.OuterEl21 || createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
        ogDefault.OuterEl22 || createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
        ogDefault.OuterEl23 || createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
        ogDefault.OuterEl24 || createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
    ];
    return shadows;
}
