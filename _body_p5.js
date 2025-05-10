import { __c , __SYD, __sC, __p} from "./sydneyLib/sydneyDom.js"

__SYD._p5 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    flexDirection:__p(['_p5','__flex'],'row-reverse'),
                    justifyContent:'space-around',
                    padding:'20px 10px',
                    minHeight:'unset',
                    color:'#171717'
                    // transform:'unset'
                }
            }),
            id:'tokenomics'
        },
        [
            // __c(
            //     'div',
            //     {
            //         style:`min-height:${__p(['_p5','__size'],'4.5rem') === '4.5rem' ? '50vh' : '300px'};min-width:${__p(['_p5','__size'],'4.5rem') === '4.5rem' ? '40%' : '100%'};background-image:url("./assets/peck.gif");`
            //     },
            //     [
                    
            //     ],
            //     {
            //         genericStyle:['bg_cover'],
            //     }
            // ),
            __c(
                'div',
                {
                    style:'width:calc(100% - 15px);max-width:600px;min-width:250px;display:flex;justify-content:center;align-items:flex-start;flex-direction:column;text-align:left;padding:50px 30px;row-gap:10px;box-shadow:0px 2px 0px 4px rgb(19, 32, 13);border-radius:20px;background: #000;color:#fafafa;text-shadow:0px 1px 1px #000 , 2px 4px 0px #000 , 3px 3px 0px #000;',
                    // class:"tab_text"
                },
                [
                    __c('h1',{style:`width:100%;text-align:center;font-weight:900;font-size:${__p(['_p5','__font'],{1:'50px'})['1']};margin-bottom:25px;font-family:header;`+__sC['txt_shade2']()},['TOKENOMICS']),//+__sC['txt_shade3']()
                    __SYD.about_text_tokenomics('🔥 $BABY RATO  is PUMPING – 64% Bonded! 🔥'),
                    __SYD.about_text_tokenomics('💰 Market Cap: $22K (Still Early!)'),
                    __SYD.about_text_tokenomics('✅ Liquidity Locked – 100% SAFU 🔒'),
                    __SYD.about_text_tokenomics('✅ Whales Accumulating – Don’t Miss Out!'),
                    __SYD.about_text_tokenomics('Token Supply: 1,000,000,000 $BABYRATO'),
                    __SYD.caBtn()
                ]
            ),
            // __c(
            //     'div',
            //     {
            //         style:`min-height:${__p(['_p5','__flex'],'row-reverse') === 'row-reverse' ? '80vh' : '300px'};min-width:${__p(['_p5','__flex'],'row-reverse') === 'row-reverse' ? '40%' : '100%'};background-image:url("./assets/toke.png");background-size:contain;border-radius:15px;`,
            //     },
            //     [
                    
            //     ],
            //     {
            //         genericStyle:['bg_cover'],
            //     }
            // ),
        ],
        {
            createState:{
                stateName:'_p5',
                state:{__size:'4.5rem',__flex:'row-reverse',__font:{1:'50px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem',__flex:'column',__font:{1:'30px',2:'17px'}}}],
                defState:{__size:'4.5rem',__flex:'row-reverse',__font:{1:'50px',2:'20px'}}
            }
        }
    )
}

__SYD.about_text_tokenomics = (text) =>{
    return __c('p',{style:`font-size: ${__p(['_p5','__font'],{1:'30px'})['2']};line-height: 1.75rem;text-align:left;font-weight:700;width:max-content;padding:15px 20px;width:100%;`},[//class:'btn_buy'
        text
    ])
}
