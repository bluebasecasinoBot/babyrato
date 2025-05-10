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
                            style:`color:#fff;font-family:sunrise;display:flex;flex-direction:column;align-items:center;row-gap:60px;height:fit-content;width:100%;font-weight:500;`// +__sC['txt_shade3']()//transform: translateX(25%) scale(${__p(['roadMapPage' , '__query'],false) ? ".8" : "1"});
                        },
                        [
                            __c(
                                "p",
                                {
                                    style:`background:#000 ;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:2px 2px 1px rgb(100 153 73);border-radius:10px;animation-delay:0s;`,
                                    class:"left_slant "
                                },
                                [
                                    __c("strong",{style:"font-size:17px;font-family:header;"},[`Phase 1 – `]) , `Birth of Baby Rato`,
                                    __c("li" , {style:`margin-top:12px;width:100%;text-align:left;color:#85c764;`} , ['Launch on Ethereum (ERC-20)']),
                                    __c("li" , {style:`margin-top:5px;width:100%;text-align:left;color:#85c764;`} , ['Deploy smart contract (renounced/locked liquidity)']),
                                    __c("li" , {style:`margin-top:5px;width:100%;text-align:left;color:#85c764;`} , ['Create website + socials (Twitter, Telegram, Discord)']),
                                    __c("li" , {style:`margin-top:5px;width:100%;text-align:left;color:#85c764;`} , ['Meme campaign kick-off: “Born to Scamper”'])
                                ]
                            ),
                            __c(
                                "p",
                                {
                                    style:`background:#000;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:2px 2px 1px rgb(100 153 73);border-radius:10px;animation-delay:.4s;"`,
                                    class:"right_slant "
                                },
                                [
                                    __c("strong",{style:"font-size:17px;font-family:header;"},[`Phase 2 – `]) , `Growing Paws`,
                                    __c("li" , {style:`margin-top:12px;width:100%;text-align:left;color:#85c764;`} , ['Community contests (memes, art, lore)']),
                                    __c("li" , {style:`margin-top:5px;width:100%;text-align:left;color:#85c764;`} , ['Listings on CoinGecko & CoinMarketCap']),
                                    __c("li" , {style:`margin-top:5px;width:100%;text-align:left;color:#85c764;`} , ['1,000+ holders']),
                                    __c("li" , {style:`margin-top:5px;width:100%;text-align:left;color:#85c764;`} , ['NFT teaser drop: Baby Rato Origins'])
                                ]
                            ),
                            __c(
                                "p",
                                {
                                    style:`background:#000000;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:-2px 2px 1px rgb(100 153 73);border-radius:10px;animation-delay:.8s;text-align:left;`,
                                    class:""
                                },
                                [
                                    __c("strong",{style:"font-size:17px;font-family:header;"},[`Phase 3 – `]) , `Rato Takes Over`,
                                    __c("li" , {style:`margin-top:12px;width:100%;text-align:left;color:#85c764;`} , ['NFT collection release']),
                                    __c("li" , {style:`margin-top:5px;width:100%;text-align:left;color:#85c764;`} , ['DAO formation for community votes']),
                                    __c("li" , {style:`margin-top:5px;width:100%;text-align:left;color:#85c764;`} , ['Ethereum partnerships & meme alliances']),
                                    __c("li" , {style:`margin-top:5px;width:100%;text-align:left;color:#85c764;`} , ['CEX listings (Tier 2)']),
                                    __c("li" , {style:`margin-top:5px;width:100%;text-align:left;color:#85c764;`} , ['Merch store launch'])
                                ]
                            ),
                            // __c(
                            //     "p",
                            //     {
                            //         style:`background:#fffaec;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #333333;border-radius:10px;animation-delay:.4s;`,
                            //         class:"right_slant"
                            //     },
                            //     [
                            //         __c("strong",{},[`4️⃣ Utility & HODL Benefits –`]) , ` Staking, NFTs, and exclusive rewards. 🔥`
                            //     ]
                            // ),
                            // __c(
                            //     "p",
                            //     {
                            //         style:`background:#fffaec;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #333333;border-radius:10px;animation-delay:.4s;text-align:right;`,
                            //         class:"right_slant"
                            //     },
                            //     [
                            //         __c("strong",{},[`5️⃣ Partnerships & Collabs –`]) , `Meme alliances and Web3 integrations. 🤝`
                            //     ]
                            // ),
                            // __c(
                            //     "p",
                            //     {
                            //         style:`background:#fffaec;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #333333;border-radius:10px;animation-delay:.4s;text-align:right;`,
                            //         class:"right_slant"
                            //     },
                            //     [
                            //         __c("strong",{},[`6️⃣ CEX Listings & Scaling –`]) , `Strategic exchange listings and mass adoption drive. 📈`
                            //     ]
                            // ),
                            //  __c(
                            //     "p",
                            //     {
                            //         style:`background:#fffaec;padding:15px 10px;transform:translateX(0px);width:${__p(["roadMapPage" , "__query"],false) ? "100%" : "50%"};min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #333333;border-radius:10px;animation-delay:.4s;text-align:right;`,
                            //         class:""
                            //     },
                            //     [
                            //         __c("strong",{},[`7️⃣ DAO Lite & Merch – `]) , `Governance voting and limited-edition Baby Cocoro merch. 🧢`
                            //     ]
                            // )
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
