import { __c, __p, __sC, __SYD } from "./sydneyLib/sydneyDom.js";

__SYD.roadMapPage = () =>{
    return __c(
        "div",
        {
            style:"min-height:fit-content;padding:70px 0;width:100%;background-image:url('./design/roadMap.png');background-position:0,0;column-gap:20px;justify-content:space-around;align-items:center;position:relative;margin-top:100px;border:16px dashed rgb(100 153 73); border-left:unset;border-right:unset;border-top:unset;" + __sC["container"]({method:"use" , style:['display','rowGap']}),
            class:"page4_flex",
            id:'roadMap'
        },
        [
            __c(
                "p",
                {
                    style:"display:flex;flex-direction:column;row-gap:30px;text-align:center;font-weight:900;align-items:center;font-size:14px;padding:0 15px;", //+ __sC['txt_shade1'](),
                    class:"page2_text"
                },
                [
                    __c(
                        "p",
                        {
                            style:`font-size:25px;font-weight:900;text-transform:capitalize;margin-bottom:10px;width:fit-content;font-family:header;color:#fff;margin-bottom:10px;font-size:${__p(['roadMapPage' , '__font'],{1:'50px'})['1']};` + __sC['txt_shade2'](),
                            class:"tokenomic_text"
                        },
                        [
                            "ROADMAP"
                        ]
                    ),

                    __c(
                        "div",
                        {
                            style:`color:#000000;font-family:sunrise;display:flex;flex-direction:column;align-items:center;row-gap:60px;height:fit-content;width:100%;font-weight:500;`// +__sC['txt_shade3']()//transform: translateX(25%) scale(${__p(['roadMapPage' , '__query'],false) ? ".8" : "1"});
                        },
                        [
                            __c(
                                "p",
                                {
                                    style:`background:#fffaec ;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #333333;border-radius:10px;animation-delay:0s;`,
                                    class:"left_slant "
                                },
                                [
                                        __c("strong",{},[`1️⃣ Launch & Liquidity – `]) , `Token launch, presale, and liquidity pool activated. 💧`
                                ]
                            ),
                            __c(
                                "p",
                                {
                                    style:`background:#fffaec;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #333333;border-radius:10px;animation-delay:.4s;"`,
                                    class:"left_slant "
                                },
                                [
                                    __c("strong",{},[`2️⃣ Airdrops & Community –`]) , `Rewarding early degens and growing the Baby Cocoro community. 🎁`
                                ]
                            ),
                            __c(
                                "p",
                                {
                                    style:`background:#fffaec;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #333333;border-radius:10px;animation-delay:.8s;`,
                                    class:"left_slant"
                                },
                                [
                                    __c("strong",{},[`3️⃣ Listings & Exposure –`]) , `Apply to CoinGecko, CMC, and push viral campaigns. 🚀`
                                ]
                            ),
                            __c(
                                "p",
                                {
                                    style:`background:#fffaec;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #333333;border-radius:10px;animation-delay:.4s;`,
                                    class:"right_slant"
                                },
                                [
                                    __c("strong",{},[`4️⃣ Utility & HODL Benefits –`]) , ` Staking, NFTs, and exclusive rewards. 🔥`
                                ]
                            ),
                            __c(
                                "p",
                                {
                                    style:`background:#fffaec;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #333333;border-radius:10px;animation-delay:.4s;text-align:right;`,
                                    class:"right_slant"
                                },
                                [
                                    __c("strong",{},[`5️⃣ Partnerships & Collabs –`]) , `Meme alliances and Web3 integrations. 🤝`
                                ]
                            ),
                            __c(
                                "p",
                                {
                                    style:`background:#fffaec;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #333333;border-radius:10px;animation-delay:.4s;text-align:right;`,
                                    class:"right_slant"
                                },
                                [
                                    __c("strong",{},[`6️⃣ CEX Listings & Scaling –`]) , `Strategic exchange listings and mass adoption drive. 📈`
                                ]
                            ),
                             __c(
                                "p",
                                {
                                    style:`background:#fffaec;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #333333;border-radius:10px;animation-delay:.4s;text-align:right;`,
                                    class:""
                                },
                                [
                                    __c("strong",{},[`7️⃣ DAO Lite & Merch – `]) , `Governance voting and limited-edition Baby Cocoro merch. 🧢`
                                ]
                            )
                        ]
                    )
                ]
            ),
        ],
        {
            createState:{
                stateName:"roadMapPage",
                state:{__query:false,__font:{1:'50px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:"<600px",prop:{__query:true,__font:{1:'30px',2:'17px'}}}],
                defState:{__query:false,__font:{1:'50px',2:'20px'}}
            }
        }
    )
}
