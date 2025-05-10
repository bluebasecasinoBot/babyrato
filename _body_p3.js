import { __SYD, __c, __sC, __p } from "./sydneyLib/sydneyDom.js";


__SYD._p3 = () =>{
    return __c(
        'div',
        {
            style:"display:flex;flex-direction:column;align-items:center;row-gap:20px;" + __sC._body_style({method:'use' , style:['background' , 'height' , 'width' , 'minHeight' , 'padding' , 'paddingTop' , 'marginTop' , 'border' , 'borderLeft' , 'borderRight' , 'borderTop']}), //+ __sC['txt_shade1'](),
            id:'about'
        },
        [
            __c('h1',{style:`font-family:header;font-weight:900;font-size:${__p(['_p3','__size'],'50px')};`+__sC['txt_shade2']()},['ABOUT']),

            __c('h1',{style:`font-family:header;font-weight:900;font-size:${__p(['_p3','__size'],'50px') == "50px" ? "60px" : "35px"};`+__sC['txt_shade2']()},['BABY RATO']),
            __c(
                "div",
                {
                    style:__sC._body_style([{
                        method:'add',style:{
                            height:'fit-content',
                            flexDirection:__p(['_p3','__flex'],'row'),
                            justifyContent:'center',
                            alignItems:"center",
                            padding:'20px 10px',
                            minHeight:'unset',
                            marginTop:"unset",
                            border:"unset",
                            background:"#000",
                            borderRadius:"60px",
                            color:"#fff",
                            borderLeft:"6px solid rgb(19, 32, 13)",
                            borderBottom:"6px solid rgb(19, 32, 13)",
                            overflow:"hidden"
                            // flexDirection:'row',
                            // transform:'unset'
                        }
                    } , {method:'remove' , style:['height' , 'minHeight' , 'paddingTop']}])
                },
                [
                    __c(
                        'div',
                        {
                            style:`min-height:${__p(['_p3','__size'],'50px') === '50px' ? '80vh' : '300px'};min-width:${__p(['_p3','__size'],'50px') === '50px' ? '40%' : '100%'};background-image:url("./assets/about.png");background-size:contain;border-radius:15px;`,
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
                            __c(
                                "p",
                                {
                                    style:"padding:15px;background:transparent;text-align:center;width:100%;",
                                    // class:"tab_text"
                                },
                                [
                                    __SYD.about_text(),
                                    // __SYD.about_text_2(),
                                ]
                            ),
                            // __SYD.page1Socials_large_icons()
                            
                        ]
                    )
                ]
            ),
        ],
        {
            createState:{
                stateName:'_p3',
                state:{__size:'50px',__flex:'row',__font:{1:'50px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'30px',__flex:'column',__font:{1:'30px',2:'17px'}}}],
                defState:{__size:'50px',__flex:'row',__font:{1:'50px',2:'20px'}}
            }
        }
    )
}

__SYD.buyNowBtn = () =>{
    return __c('a',{href:'https://tools.smithii.io/launches-list/solana',target:'blank',style:`display:${__p(['navBar','__nav_d'],'flex')};align-items:center;justify-content:center;padding:15px 30px;text-decoration:none;`+__sC["txt_shade3"](),class:'btn_buy'},['Buy Now'],{genericStyle:['bg_fit']})
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

__SYD.about_text = () =>{
    return __c('p',{style:`font-size:${__p(['_p3' , '__font'],{2:'20px'})['2']};line-height: unset;text-align:center;font-weight:100;padding:${__p(["_p3" , "__flex"],"row") === "row" ? "50px" : "20px"};`},[
        __c(
            "p",
            {
                style:"font-family:header;font-size:30px;line-height:50px;border-bottom:2px solid;text-align:left;color:#85c764;"
            }
            ,[
                "What Is Baby Rato"
            ]
        ),
        __c("p" , {style:`margin-top:12px;text-align:${__p(["_p3" , "__flex"],"row") === "row" ? "left" : "center"};`} , [
            `Welcome to Baby Rato, a meme coin inspired by Matt Furie’s iconic Rato the Rat. Born from the same quirky spirit, Baby Rato is here to bring fun, community, and a touch of mischief to the crypto world. Join us as we scamper into the future!`
        ]),
        __c("p" , {style:`margin-top:12px;text-align:${__p(["_p3" , "__flex"],"row") === "row" ? "left" : "center"};`} , [
            `You ape, you earn. You trade, you grow. This ain’t your grandma’s memecoin—it’s pure blockchain anarchy with style.`
        ])
    ])
}


__SYD.about_text_2 = () =>{
    return __c('p',{style:`font-size:${__p(['_p3' , '__font'],{2:'25px'})['2']};line-height: unset;max-width:500px;text-align:center;font-weight:100;margin-top:12px;`},[
        `Join us as we revolutionize the memecoin space, one laugh at a time, and prove that sometimes, the silliest ideas can lead to the greatest success. Together, let's make Big Mac wif Hat a symbol of fun, unity, in the world of crypto! 🍔🎩 `
    ])
}
