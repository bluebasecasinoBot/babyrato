import { __SYD, __c, __sC, __p } from "./sydneyLib/sydneyDom.js";


__SYD._p3_aux = () =>{
    return __c(
        'div',
        {
            style:`display:flex;flex-direction:column;align-items:center;row-gap:20px;` + __sC._body_style({method:'use' , style:['background' , 'height' , 'width' , 'minHeight' , 'padding' , 'paddingTop' , 'marginTop' , 'border' , 'borderLeft' , 'borderRight' , 'borderTop']}) + `padding-left:${__p(['_p3_aux','__size'],'50px') === '50px' ? '10px' : '0px'};padding-right:${__p(['_p3_aux','__size'],'50px') === '50px' ? '10px' : '0px'}`, //+ __sC['txt_shade1'](),
            id:'about_aux'
        },
        [
            __c('h1',{style:`font-family:header;font-weight:900;font-size:${__p(['_p3_aux','__size'],'50px')};`+__sC['txt_shade2']()},['HOW TO BUY']),
            __c(
                "div",
                {
                    style:__sC._body_style([{
                        method:'add',style:{
                            height:'fit-content',
                            flexDirection:__p(['_p3_aux','__flex'],'row-reverse'),
                            justifyContent:'center',
                            alignItems:"center",
                            minHeight:'unset',
                            marginTop:"unset",
                            border:"unset"
                            // flexDirection:'row-reverse',
                            // transform:'unset'
                        }
                    } , {method:'remove' , style:['height' , 'minHeight' , 'padding' , 'paddingTop' , 'background']}])
                },
                [
                    __c(
                        'div',
                        {
                            style:`min-height:${__p(['_p3_aux','__size'],'50px') === '50px' ? '80vh' : '300px'};min-width:${__p(['_p3_aux','__size'],'50px') === '50px' ? '40%' : '100%'};background-image:url("./assets/n_logo.png");background-size:contain;border-radius:15px;`,
                        },
                        [
                            
                        ],
                        {
                            genericStyle:['bg_cover'],
                        }
                    ),
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:15px;perspective:800px;'
                        },
                        [
                            // __c('h1',{style:`padding:0 15px;width:100%;text-align:left;color:#FAFAFA;font-family:sunrise;font-weight:900;font-weight:100;font-size:${__p(['_p3_aux','__size'],'30px')}`+__sC['txt_shade2']()},['THE ORIGIN STORY']),
                            __c(
                                "p",
                                {
                                    style:"padding:15px;background:transparent;text-align:center;width:100%",
                                    // class:"tab_text"
                                },
                                [
                                    __SYD.about_text_aux(),
                                    // __SYD.about_text_2(),
                                ]
                            ),
                            
                        ]
                    )
                ]
            ),
        ],
        {
            createState:{
                stateName:'_p3_aux',
                state:{__size:'50px',__flex:'row-reverse',__font:{1:'30px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'30px',__flex:'column',__font:{1:'25px',2:'17px'}}}],
                defState:{__size:'50px',__flex:'row-reverse',__font:{1:'30px',2:'20px'}}
            }
        }
    )
}


__SYD.page1Socials_large_icons = () =>{
    return __c(
        'div',
        {
            style:'width:100%;padding:10px 15px;display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:20px;flex-wrap:wrap;perspective:500px;'
        },
        [
            __SYD.buyNowBtn(),
            // __SYD.page1SocialBtn_large_icons({contentSrc:'sol'}),
            // __SYD.page1SocialBtn_large_icons({contentSrc:'bin'}),
        ]
    )
}

__SYD.about_text_aux = () =>{
    return __c('p',{style:`display:flex;flex-direction:column;gap:15px;border-left:6px solid rgb(19, 32, 13);border-bottom:6px solid rgb(19, 32, 13);font-size:${__p(['_p3_aux' , '__font'],{2:'20px'})['2']};line-height: unset;text-align:left;font-weight:100;padding:${__p(["_p3_aux" , "__flex"],"row-reverse") === "row-reverse" ? "50px" : "20px"};background: #000000 ;border-radius:60px;color:fff;`},[
        __c("p" , {style:`margin-top:12px;`} , [
            `🔥We’re thrilled to unveil the token distribution plan for Baby Rato—your ticket to chaos, rewards, and high-speed degen action on Ethereum!`
        ]),
        __c("p" , {style:`margin-top:0px;`} , [
            `Getting your hands on $BABYRATO is easy! Just follow these simple steps to join the Baby Rato community and start your scamper into the future:`
        ]),
        __c("li" , {style:`margin-top:12px;margin-left:15px;width:100%;text-align:left;font-size:17px;color:#85c764;`} , ['Install MetaMask or another Ethereum-compatible wallet and connect to the Ethereum Mainnet.']),

        __c("li" , {style:`margin-top:5px;margin-left:15px;width:100%;text-align:left;font-size:17px;color:#85c764;`} , ['Buy ETH using MetaMask or transfer ETH from a centralized exchange to your wallet.']),

        __c("li" , {style:`margin-top:5px;margin-left:15px;width:100%;text-align:left;font-size:17px;color:#85c764;`} , ['Go to Uniswap and connect your wallet.']),

        __c("li" , {style:`margin-top:5px;margin-left:15px;width:100%;text-align:left;font-size:17px;color:#85c764;`} , ['Paste the official Baby Rato contract address into the token field.']),

        __c("li" , {style:`margin-top:5px;margin-left:15px;width:100%;text-align:left;font-size:17px;color:#85c764;`} , ['Swap ETH for $RATO. Adjust slippage if needed and confirm the transaction.']),

        __c("li" , {style:`margin-top:5px;margin-left:15px;width:100%;text-align:left;font-size:17px;color:#85c764;`} , ['Add $BABYRATO to your wallet to see your tokens.']),

        __c("p" , {style:`margin-top:12px;margin-bottom:12px;`} , [
            `Let’s moon together!🐶🚀🌕`
        ]),
        // __SYD.buyNowBtn(),
    ])
}


__SYD.about_text_2_aux = () =>{
    return __c('p',{style:`font-size:${__p(['_p3_aux' , '__font'],{2:'25px'})['2']};line-height: unset;max-width:500px;text-align:center;font-weight:100;margin-top:12px;`},[
        `Join us as we revolutionize the memecoin space, one laugh at a time, and prove that sometimes, the silliest ideas can lead to the greatest success. Together, let's make Big Mac wif Hat a symbol of fun, unity, in the world of crypto! 🍔🎩 `
    ])
}
