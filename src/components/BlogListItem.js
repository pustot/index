import { Link as MuiLink, Typography } from "@mui/material";
import "purecss/build/pure.css";
import React from "react";
import { getFallbackLanguage, getLocaleText, languageCodeToLocale } from "../data/I18n";
import "../styles.scss";

export default function BlogListItem({ id, blogs, lang, titleTranslations }) {
    // Blog List is still Loading
    if (!(id in blogs))
        return <Typography variant="caption">{"Loading"}</Typography>;

    const [ date, titleId ] = [ id.slice(0, 9), id.slice(9) ];

    // Blog available in the current page language
    if (lang in blogs[id]) {
        return (
            <div>
                <MuiLink key={id} href={"/blog/" + blogs[id][lang][0]}>
                    {blogs[id][lang][1]}
                </MuiLink>
                <Typography variant="caption">{" (" + date + ")"}</Typography>
            </div>
        );
    }

    const fallbackLanguage = getFallbackLanguage(blogs[id], lang);
    const targetLanguageLocale = languageCodeToLocale(fallbackLanguage, lang);
    const [targetFileName, targetFileTitle] = blogs[id][fallbackLanguage];

    // Title Translation Available
    if (titleTranslations && (lang in titleTranslations[titleId])) {
        return <div>
            <MuiLink
                key={id}
                href={ "/blog/" + targetFileName }
            >
                {titleTranslations[titleId][lang]}
            </MuiLink>
            <Typography variant="caption">
                {" (" + date + ") " +
                    getLocaleText(
                        {
                            en:
                                "(Not in the current language. Original title (in " +
                                targetLanguageLocale +
                                "): ",
                            "zh-Hant":
                                "（非當前語言。原標題（" + targetLanguageLocale + "）：",
                            "zh-Hans":
                                "（非当前语言。原标题（" + targetLanguageLocale + "）：",
                            "tto-bro":
                                "(bFe DRZ98aH Zei2ZeiH. ZvoH beaFD8ae (" +
                                targetLanguageLocale +
                                "): ",
                            tto:
                                "(Ve SRHM aHaH. beaFDae aH eSSa (" +
                                targetLanguageLocale +
                                "): ",
                            ja:
                                "（今の言語ではありません。元の題名（" +
                                targetLanguageLocale +
                                "で）：",
                            de:
                                "(Nicht auf die aktuelle Sprache. Der Originaltitel (auf " +
                                targetLanguageLocale +
                                "): ",
                        },
                        lang
                    )}
                {targetFileTitle}
                {getLocaleText(
                    {
                        en: ")",
                        "zh-Hant": "）",
                        "zh-Hans": "）",
                        "tto-bro": ")",
                        tto: ")",
                        ja: "）",
                        de: ")",
                    },
                    lang
                )}
            </Typography>
        </div>
    }

    return (
        <div>
            <MuiLink
                key={id}
                href={ "/blog/" + targetFileName }
            >
                {targetFileTitle}
            </MuiLink>
            <Typography variant="caption">
                {" (" + date + ") " +
                    getLocaleText(
                        {
                            en: "(Not in the current language)",
                            "zh-Hant": "（非當前語言）",
                            "zh-Hans": "（非当前语言）",
                            "tto-bro": "(bFe DRZ98aH Zei2ZeiH)",
                            tto: "(Ve SRHM aHaH)",
                            ja: "（今の言語ではありません）",
                            de: "(Nicht auf die aktuelle Sprache)",
                        },
                        lang
                    )}
            </Typography>
        </div>
    );
}
