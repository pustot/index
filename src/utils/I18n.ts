export type LangCode = "eo" | "zh-Hans" | "zh-Hant" | "en" | "ja" | "de" | "tto" | "tto-bro" | "ko" | "fr";

export type I18nT<T> = {
    [key in LangCode]?: T;
};

export type I18nText = I18nT<string>;

type I18nI18n = I18nT<I18nText>;

// 优先世界语，但其后便尝试英语，当前无奈之举
// After eo, first try en for the needs of more people,
// for now
const fallbackLanguages: string[] = ["eo", "en", "zh-Hans", "zh-Hant", "ja", "de", "tto", "tto-bro", "ko", "fr"];

export const getFallbackLanguage = (i18nText: I18nT<any>, pageLang: string): LangCode => {
    if (pageLang in i18nText) {
        return pageLang as LangCode;
    } else {
        for (let lang of fallbackLanguages) {
            if (lang in i18nText) return lang as LangCode;
        }
    }
    return "en";
};

export const getLocaleText = (i18nText: I18nText, pageLang: string): string => {
    return i18nText[getFallbackLanguage(i18nText, pageLang)] || "";
};

const langNames: I18nI18n = {
    "eo": {
        "eo": "Esperanto",
        "zh-Hans": "世界语（希望语）",
        "zh-Hant": "世界語（希望語）",
        "en": "Esperanto",
        "ja": "エスペラント",
        "de": "Esperanto",
        "tto": "SrHM-aChaKrHLo",
        "tto-bro": "XyeVurZ3Zyo2",
        "ko": "에스페란토",
        "fr": "espéranto",
    },
    "zh-Hans": {
        "eo": "Ĉina Simpligita",
        "zh-Hans": "简体中文",
        "zh-Hant": "簡體中文",
        "en": "Simplified Chinese",
        "ja": "簡体字中国語",
        "de": "Vereinfachtes Chinesisch",
        "tto": "SrHM-YQaHLaeDenZVnH",
        "tto-bro": "YQaH2Lae2 DlenZVnH",
        "ko": "중국어 간체",
        "fr": "chinois simplifié",
    },
    "zh-Hant": {
        "eo": "Ĉina Tradicia",
        "zh-Hans": "繁体中文",
        "zh-Hant": "繁體中文",
        "en": "Traditional Chinese",
        "ja": "繁体字中国語",
        "de": "Traditionelles Chinesisch",
        "tto": "SrHM-bvoHLaeDenZVnH",
        "tto-bro": "b8voHLae2 DlenZVnH",
        "ko": "중국어 번체",
        "fr": "chinois traditionnel",
    },
    "en": {
        "eo": "Angla",
        "zh-Hans": "英语",
        "zh-Hant": "英語",
        "en": "English",
        "ja": "英語",
        "de": "Englisch",
        "tto": "SrHM-aZYSeW",
        "tto-bro": "OQecZZei2",
        "ko": "영어",
        "fr": "anglais",
    },
    "ja": {
        "eo": "Japana",
        "zh-Hans": "日语",
        "zh-Hant": "日語",
        "en": "Japanese",
        "ja": "日本語",
        "de": "Japanisch",
        "tto": "SrHM-HeXoZYo",
        "tto-bro": "HMeLZei2",
        "ko": "일본어",
        "fr": "japonais",
    },
    "de": {
        "eo": "Germana",
        "zh-Hans": "德语",
        "zh-Hant": "德語",
        "en": "German",
        "ja": "ドイツ語",
        "de": "Deutsch",
        "tto": "SrHM-DmvJ",
        "tto-bro": "DiAZei2",
        "ko": "독일어",
        "fr": "allemand",
    },
    "tto": {
        "eo": "Dzwietthoungika",
        "zh-Hans": "绝通语",
        "zh-Hant": "絕通語",
        "en": "Dzwietthoungic",
        "ja": "絶通語",
        "de": "Dzwietthoungica",
        "tto": "SrHM-9vaLLnZ",
        "tto-bro": "9vaLLnZZei2",
        "ko": "절통어",
        "fr": "dzwietthoungica",
    },
    "tto-bro": {
        "eo": "Dzwiet Brongduk",
        "zh-Hans": "絶棒语",
        "zh-Hant": "絶棒語",
        "en": "Dzwiet Brongduk",
        "ja": "絶棒語",
        "de": "Dzwiet Brongduk",
        "tto": "SrHM-bQmZDnA",
        "tto-bro": "9vaLb8QmZ2Zei2",
        "ko": "절봉어",
        "fr": "Dzwiet Brondouque",
    },
    "ko": {
        "eo": "Korea",
        "zh-Hans": "韩语",
        "zh-Hant": "韓語",
        "en": "Korean",
        "ja": "韓国語",
        "de": "Koreanisch",
        "tto": "SrHM-XrHYnYm",
        "tto-bro": "X8rHZei2",
        "ko": "한국어",
        "fr": "coréen",
    },
    "fr": {
        "eo": "Franca",
        "zh-Hans": "法语",
        "zh-Hant": "法語",
        "en": "French",
        "ja": "仏語",
        "de": "Französisch",
        "tto": "SrHM-NkrZCc",
        "tto-bro": "bvohZei2",
        "ko": "프랑스어",
        "fr": "français",
    },
};

export const languageCodeToLocale = (langCode: string, pageLang: string): string => {
    return langNames[langCode as LangCode]![pageLang as LangCode] || "";
};
