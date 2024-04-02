const telegrambot=require('node-telegram-bot-api');
const token='6602986941:AAHv-k8CpaGXsSrrVqchRBA0Joc5MYg2Xwo';
const bot=new telegrambot(token,{polling:true});
//talk
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
 bot.sendMessage(chatId, 'გამარჯობა მე ვარ ზვიადა,რით შემიძლია დაგეხმარო?.');
  });
bot.onText(/შენი საყვარელი საჭმელი/,(msg)=>{
  const food=msg.chat.id;
  bot.sendMessage(food,`რათქმაუნდა ქართული მამა-პაპური ხინკალი`);
})
const pasuxi=['გისმენ მეგობარო','ხომ არ მეძახდით','გისმენთ','აქ ვარ'];
const ansveri=(max,min)=>{
  return Math.round(min-0.8+Math.random()*(max-min+1));
};
bot.onText(/ზვიადა/,(msg)=>{
  const zviadi=msg.chat.id;
  bot.sendMessage(zviadi,`${pasuxi[ansveri(3,0)]}`);
})         
bot.onText(/ვინ შეგქმნა/,(msg)=>{
  const shemqmneli=msg.chat.id;
  bot.sendMessage(shemqmneli,'უნიჭიერესმა ადამიანმა დანიელმა')
})
bot.onText(/გამარჯობა/,(msg)=>{
  const gamarjoba=msg.chat.id;
  bot.sendMessage(gamarjoba,`გაგიმარჯოს მეგობარო`);
})
bot.onText(/შენი საყვარელი მანქანა/,(msg)=>{
  const pipia=msg.chat.id;
  bot.sendMessage(pipia,`მანქანის ბრენდს დიდ მნიშვნელობას არ ვანიჭებ ისე კი  ტოიოტა მომწონს`);
})
// wigni
const satavgadasavlo=['15 წლის კაპიტანი','საიდუმლო კუნძული','80000 კილომეტრი წყალქვეშ','ტომ სოიერის თავგადასავალი','დონ კიხოტი','თეთრი ეშვი','ჰარი პოტერი','ოლივერ ტვისტი','თეთრი ბელადი','შორეულ პრერიებში დაკარგული ბიჭები','დომენიკა და საიდუმლო ქალაქი','კაპიტან გრანტის შვილები','რობინზონ კრუზოს ცხოვრება','ნუ მოკლავ ჯაფარას','კვარტერონი','პატარა მაწანწალა','პატარა მაწანწალა',]
const ukukav=(max,min)=>{
  return Math.round(min-0.9+Math.random()*(max-min+1));
};
const romani=['სუადი ცოცხლად დამწვარი','ოსტატი და მარგარიტა','ბოლოს ორივე კვდება','შავი პრიზმა','ხაფანგი 22','გონდოლინის დაცემა','ანა კარენინა','ხვლიკი საფლავის ქვაზე','ომის დღიურები','იასამნის გოგოები','ყველგან ხანძრის კერებია','ცათამბჯენი','ბედუინი','მარიამ სტიუარტი','მობი დიკი','სამი მუშკეტერი','თეთრი ბაირაღები','მე ვხედავ მზეს','ბერენი და ლუთიენი','წინაპართა ძახილი','სამხრეთული სპილო','სოლომან მორბელაძე','ჩაძირული ქალაქი','გმირთა ვარამი','რეკვიემი','ტრიუმფალური თაღი','ჯინსების თაობა','მზე მთვარე და პურისყანა'];
const ukukavshiri=(max,min)=>{
  return Math.round(min-1.4+Math.random()*(max-min+1));
};
bot.onText(/რომელი წიგნი წავიკითხო/,(msg)=>{
  const andi=msg.chat.id;
  bot.sendMessage(andi,`კონკრეტულად რომელიმე ჟანრი თუ ნებისმიერი`);
})
bot.onText(/რომელი წიგნის წაკითხვას მირჩევ/,(msg)=>{
  const andid=msg.chat.id;
  bot.sendMessage(andid,`კონკრეტულად რომელიმე ჟანრი თუ ნებისმიერი`);
})
bot.onText(/სათავგადასავლო/,(msg)=>{
  const satav=msg.chat.id;
  bot.sendMessage(satav,`${satavgadasavlo[ukukav(17,0)]}`);
})
bot.onText(/რომანი/,(msg)=>{
  const rom=msg.chat.id;
  bot.sendMessage(rom,`${romani[ukukavshiri(28,0)]}`);
})
  //CHANNELS
  bot.onText(/ჩართე იმედი/,(msg)=>{
    const imedi=msg.chat.id;
    bot.sendMessage(imedi,`https://tv.cdn.xsg.ge/imedihd/tracks-v1a1/mono.m3u8`);
  })
  bot.onText(/ჩართე პალიტრა/,(msg)=>{
    const palitra=msg.chat.id;
    bot.sendMessage(palitra,`https://live.palitranews.ge/hls/palitratv/index.m3u8`);
  })
  //MUSIC
  bot.onText(/ლექსსენი ხელები მაღლა/,(msg)=>{
    const simg=msg.chat.id;
    bot.sendMessage(simg,`https://youtu.be/LBwZFFRCm0Y?si=30p4D7M2Vxcr69Zi`);
  })
  bot.onText(/Loudspeakers world in my eyes/,(msg)=>{
    const loud=msg.chat.id;
    bot.sendMessage(loud,`https://youtu.be/im93RBMcuXc?si=Iwx76SM5HI99UWO3`);
  })
  bot.onText(/Last christmas/,(msg)=>{
    const wham=msg.chat.id;
    bot.sendMessage(wham,`https://youtu.be/E8gmARGvPlI?si=KceiwLzjhgbuDdcU`);
  })
  bot.onText(/Baat it/,(msg)=>{
    const beat=msg.chat.id;
    bot.sendMessage(beat,`https://youtu.be/E8gmARGvPlI?si=KceiwLzjhgbuDdcU`);
  })
  bot.onText(/Billie jean/,(msg)=>{
    const billie=msg.chat.id;
    bot.sendMessage(billie,`https://youtu.be/Zi_XLOBDo_Y?si=o18NTwkE8GsP_Cni`);
  })
  bot.onText(/In da club/,(msg)=>{
    const ind=msg.chat.id;
    bot.sendMessage(ind,`https://youtu.be/5qm8PH4xAss?si=w6WZDAp4VqKSCeRj`);
  })
  bot.onText(/მგზავრები მთვარე/,(msg)=>{
    const mt=msg.chat.id;
    bot.sendMessage(mt,`https://youtu.be/ofak-1UW5es?si=_cMM0ED9rmqjti2S`);
  })
  bot.onText(/ანრი ჯოხაძე უფლება/,(msg)=>{
    const anr=msg.chat.id;
    bot.sendMessage(anr,`https://youtu.be/5LXKaRwFpRw?si=agRDGTdJodURstlZ`);
  })
  bot.onText(/არა კი/,(msg)=>{
    const ki=msg.chat.id;
    bot.sendMessage(ki,`https://youtu.be/pXWzLCz8dK8?si=d67IL7Sl0KCMwolW`);
  })
  bot.onText(/Actions of directions/,(msg)=>{
    const act=msg.chat.id;
    bot.sendMessage(act,`https://youtu.be/mCcn60Bq1-I?si=zAttr4t-hwo4iN30`);
  })
  bot.onText(/I want to break free/,(msg)=>{
    const want=msg.chat.id;
    bot.sendMessage(want,`https://youtu.be/WUOtCLOXgm8?si=mTor3vx-2JEJZ8a8`);
  })
  bot.onText(/Cheri cheri lady/,(msg)=>{
    const chari=msg.chat.id;
    bot.sendMessage(cheri,`https://youtu.be/eNvUS-6PTbs?si=59A0AnABbZ2qD0yp`);
  })
  bot.onText(/ქართული დისკო/,(msg)=>{
    const geo=msg.chat.id;
    bot.sendMessage(geo,`https://youtu.be/AMqUHPqCbI4?si=GUUClt4_h7nH4ngC`);
  })
  bot.onText(/I will survive/,(msg)=>{
    const w=msg.chat.id;
    bot.sendMessage(w,`https://youtu.be/6dYWe1c3OyU?si=P9Ww3bD3ONInKIo5`);
  })
  bot.onText(/Snowman/,(msg)=>{
    const sia=msg.chat.id;
    bot.sendMessage(sia,`https://youtu.be/J_QGZspO4gg?si=98Zm59fM1eutJSGN`);
  })
  bot.onText(/Macarena/,(msg)=>{
    const makaroni=msg.chat.id;
    bot.sendMessage(makaroni,`https://youtu.be/2zvd1JQ0EKY?si=I5dU_MTlPkp4INEB`);
  })
  bot.onText(/Blinding lights/,(msg)=>{
    const wee=msg.chat.id;
    bot.sendMessage(wee,`https://youtu.be/4NRXx6U8ABQ?si=x5bn_Tc4px6bRCie`);
  })
  bot.onText(/Save your tears/,(msg)=>{
    const tear=msg.chat.id;
    bot.sendMessage(tear,`https://youtu.be/XXYlFuWEuKI?si=cDfR-4Q2AphOqIgK`);
  })
  bot.onText(/არა მსხალი/,(msg)=>{
  const msx=msg.chat.id;
  bot.sendMessage(msx,`https://youtu.be/dTU7dvzLRZA?si=JWAoKeMOUg4_wB4s`);
  })
  bot.onText(/არა ირმა/,(msg)=>{
    const irma=msg.chat.id;
    bot.sendMessage(irma,`https://youtu.be/TVBVblcj46g?si=mmUuaAuzhD81hM0L`);
  })
  bot.onText(/არა საქართველო/,(msg)=>{
    const saq=msg.chat.id;
    bot.sendMessage(saq,`https://youtu.be/N32Ew_68oBQ?si=p1tCxFnuxVfDhRff`);
  })
  bot.onText(/Den den duri/,(msg)=>{
    const den=msg.chat.id;
    bot.sendMessage(den,`https://youtu.be/ismxF7Yxugc?si=C9fGXWNOqwyWaman`);
  })
  bot.onText(/დამისხი დამალევინე/,(msg)=>{
    const mgzavrebi=msg.chat.id;
    bot.sendMessage(mgzavrebi,`https://youtu.be/nC6F_54dDss?si=UoFZxH0ieRyiP4Zw`);
  })
  bot.onText(/Reggaeon mdevari/,(msg)=>{
    const reggaeon=msg.chat.id;
    bot.sendMessage(reggaeon,`https://youtu.be/w7kUCHC8ywA?si=1piJ3apRbKddiiaa`);
  })
  bot.onText(/Michael jackson bad/,(msg)=>{
    const maikli=msg.chat.id;
    bot.sendMessage(maikli,`https://youtu.be/dsUXAEzaC3Q?si=EPV3kAs5Qmn3N2fr`);
  })
  bot.onText(/Smooth criminal/,(msg)=>{
    const mkj=msg.chat.id;
    bot.sendMessage(mkj,`https://youtu.be/sFvENQBc-F8?si=SzASZwyQRkZL4M-q`);
  })
  bot.onText(/ზვიად ბექაური აღარ მოხვიდე/,(msg)=>{
    const zviki=msg.chat.id;
    bot.sendMessage(zviki,`https://youtu.be/nOcJ1fIpfHY?si=Z0OPvSFGpujIWLuh`);
  })
  bot.onText(/ანანკე/,(msg)=>{
    const ananke=msg.chat.id;
    bot.sendMessage(ananke,`https://youtu.be/FyMdNTv3bl4?si=fA3_zWBl2mFBryQP`);
  })
  bot.onText(/505/,(msg)=>{
    const xutasxuti=msg.chat.id;
    bot.sendMessage(xutasxuti,`https://youtu.be/qU9mHegkTc4?si=6NNEfh161xcTbq3f`);
  })
  bot.onText(/Arabella/,(msg)=>{
    const arabella=msg.chat.id;
    bot.sendMessage(arabella,`https://youtu.be/Jn6-TItCazo?si=qjOpdNUQ9wpkrZfE`);
  })
  bot.onText(/Mgmt little dark age/,(msg)=>{
    const mgmt=msg.chat.id;
    bot.sendMessage(mgmt,`https://youtu.be/rtL5oMyBHPs?si=ALJf64QwQWkPsNcM`);
  })
  bot.onText(/ოჩოს ქოხი ჩემი ბედნიერება/,(msg)=>{
    const ocho=msg.chat.id;
    bot.sendMessage(ocho,`https://youtu.be/12TkK2QDaWg?si=tOGUD0HDR3Ix35y2`);
  })
  bot.onText(/ნინო ჩხეიძე რამდენი დრო გავიდა/,(msg)=>{
    const nino=msg.chat.id;
    bot.sendMessage(nino,`https://youtu.be/Aroff4oehlE?si=Hw1UpkrVQKaLIhye`);
  })
  bot.onText(/Dvrst close eyes/,(msg)=>{
    const dvrst=msg.chat.id;
    bot.sendMessage(dvrst,`https://youtu.be/ao4RCon11eY?si=9j9LzhAiQ9jFYcoa`);
  })
  //QUESTIONS         
  bot.onText(/ვინ იყო უცხო მოყმე/,(msg)=>{
    const moyme=msg.chat.id;
    bot.sendMessage(moyme,`ტარიელი`);
  })
  bot.onText(/ვინ დაწერა ვეფხისტყაოსანი/,(msg)=>{
    const d=msg.chat.id;
    bot.sendMessage(d,`შოთა რუსთველმა`);
  })
  bot.onText(/რამდენი ასოა ქართულში/,(msg)=>{
    const aso=msg.chat.id;
    bot.sendMessage(aso,`33`);
  })
  bot.onText(/რამდენი ხმოვანია ქართულში/,(msg)=>{
    const xmovani=msg.chat.id;
    bot.sendMessage(xmovani,`5 ხმოვანი:ა,ე,ი,ო,უ,`);
  })
  bot.onText(/საქართველოს პირველი პრეზიდენტი/,(msg)=>{
    const zvia=msg.chat.id;
    bot.sendMessage(zvia,`ზვიად გამსახურდია`);
  })
  //CAPITAL CITY
  bot.onText(/საფრანგეთის დედაქალაქი/,(msg)=>{
    const france=msg.chat.id;
    bot.sendMessage(france,`პარიზი`);
  })
  bot.onText(/ზიმბაბვეს დედაქალაქი/,(msg)=>{
    const zimbabve=msg.chat.id;
    bot.sendMessage(zimbabve,`ჰარარე`);
  })
  bot.onText(/ურუგვაის დედაქალაქი/,(msg)=>{
    const uruguay=msg.chat.id;
    bot.sendMessage(uruguay,`მონტევიდეო`);
  })
  bot.onText(/პაკისტანის დედაქალაქი/,(msg)=>{
    const pakistan=msg.chat.id;
    bot.sendMessage(pakistan,`ისლამაბადი`);
  })
  bot.onText(/საქართველოს დედაქალაქი/,(msg)=>{
    const georgia=msg.chat.id;
    bot.sendMessage(georgia,`თბილისი`);
  })
  bot.onText(/ყაზახეთის დედაქალაქი/,(msg)=>{
    const kaz=msg.chat.id;
    bot.sendMessage(kaz,`ასტანა`);  
  })
  bot.onText(/ნიგერიის დედაქალაქი/,(msg)=>{
    const nigeria=msg.chat.id;
    bot.sendMessage(nigeria,`აბუჯა`);
  })
  bot.onText(/მაროკოს დედაქალაქი/,(msg)=>{
    const marocco=msg.chat.id;
    bot.sendMessage(marocco,`რაბატი`);
  })
  bot.onText(/ეთიოპიის დედაქალაქი/,(msg)=>{
    const etiopia=msg.chat.id;
    bot.sendMessage(etiopia,`ადის-აბება`);
  })
  bot.onText(/ლაოსის დედაქალაქი/,(msg)=>{
    const laos=msg.chat.id;
    bot.sendMessage(laos,`ვიენტიანი`);
  })
  bot.onText(/ისრაელის დედაქალაქი/,(msg)=>{
    const israel=msg.chat.id;
    bot.sendMessage(israel,`იერუსალიმი`);
  })
  bot.onText(/რუსეთის დედაქალაქი/,(msg)=>{
    const russia=msg.chat.id;
    bot.sendMessage(russia,`მოსკოვი`);
  })
  bot.onText(/ბელიზის დედაქალაქი/,(msg)=>{
    const belize=msg.chat.id;
    bot.sendMessage(belize,`ბელმოპანი`);
  })
  bot.onText(/სომხეთის დედაქალაქი/,(msg)=>{
    const armenia=msg.chat.id;
    bot.sendMessage(armenia,`ერევანი`);
  })
  bot.onText(/პანამის დედაქალაქი/,(msg)=>{
    const panama=msg.chat.id;
    bot.sendMessage(panama,`პანამა`);
  })
  bot.onText(/აზერბაიჯანის დედაქალაქი/,(msg)=>{
    const az=msg.chat.id;
    bot.sendMessage(az,`აზერბაიჯანი`);
  })
  bot.onText(/ჩინეთის დედაქალაქი/,(msg)=>{
    const china=msg.chat.id;
    bot.sendMessage(china,`პეკინი`);
  })
  bot.onText(/ლატვიის დედაქალაქი/,(msg)=>{
    const lat=msg.chat.id;
    bot.sendMessage(lat,`რიგა`);
  })
  bot.onText(/თურქეთის დედაქალაქი/,(msg)=>{
    const turkey=msg.chat.id;
    bot.sendMessage(turkey,`ანკარა`);
  })
  bot.onText(/იტალიის დედაქალაქი/,(msg)=>{
    const ita=msg.chat.id;
    bot.sendMessage(ita,`რომი`);
  })
  bot.onText(/შვედეთის დედაქალაქი/,(msg)=>{
    const swed=msg.chat.id;
    bot.sendMessage(swed,`სტოკჰოლმი`);
  })
  bot.onText(/ფინეთის დედაქაალაქი/,(msg)=>{
    const fin=msg.chat.id;
    bot.sendMessage(fin,`ჰელსინკი`);
  })
  bot.onText(/ნორვეგიის დედაქალაქი/,(msg)=>{
    const norw=msg.chat.id;
    bot.sendMessage(norw,`ოსლო`);
  })
  bot.onText(/გერმანიის დედაქალაქი/,(msg)=>{
    const ger=msg.chat.id;
    bot.sendMessage(ger,`ბერლინი`);
  })
  bot.onText(/პოლონეთის დედაქალაქი/,(msg)=>{
    const pol=msg.chat.id;
    bot.sendMessage(pol,`ვარშავა`);
  })
  bot.onText(/უკრაინის დედაქალაქი/,(msg)=>{
    const ua=msg.chat.id;
    bot.sendMessage(ua,`კიევი`);
  })
  bot.onText(/საუდის არაბეთის დედაქალაქი/,(msg)=>{
    const saud=msg.chat.id;
    bot.sendMessage(saud,`ერ-რიადი`);
  })
  bot.onText(/არგენტინის დედაქალაქი/,(msg)=>{
    const argen=msg.chat.id;
    bot.sendMessage(argen,`ბუენოს-აირესი`);
  })
bot.onText(/კუბის დედაქალაქი/,(msg)=>{
  const cub=msg.chat.id;
  bot.sendMessage(cub,`ჰავანა`);
})
bot.onText(/იაპონიის დედაქალაქი/,(msg)=>{
  const japa=msg.chat.id;
  bot.sendMessage(japa,`ტოკიო`);
})
bot.onText(/ახალი ზელანდიის დედაქალაქი/,(msg)=>{
  const newze=msg.chat.id;
  bot.sendMessage(newze,`უელინგტონი`);
})
bot.onText(/დანიის დედაქალაქი/,(msg)=>{
  const denm=msg.chat.id;
  bot.sendMessage(denm,`კოპენჰაგენი`);    
})
bot.onText(/სირიის დედაქალაქი/,(msg)=>{
  const sir=msg.chat.id;
  bot.sendMessage(sir,`დამასკო`);
})
bot.onText(/კანადის დედაქალაქი/,(msg)=>{
  const canad=msg.chat.id;
  bot.sendMessage(canad,`ოტავა`);
})
  //recipes
  bot.onText(/ხინკლის რეცეპტი/,(msg)=>{
    const xink=msg.chat.id;
    bot.sendMessage(xink,`https://gemrielia.ge/recipe/1117-mTiuluri-xinkali-sakuTari-xeliT/`);
  })
  bot.onText(/ხინკლის მომზადების წესი/,(msg)=>{
    const xinka=msg.chat.id;
    bot.sendMessage(xinka,`https://gemrielia.ge/recipe/1117-mTiuluri-xinkali-sakuTari-xeliT/`);
  })
  bot.onText(/პიცის რეცეპტი/,(msg)=>{
    const pizza=msg.chat.id;
    bot.sendMessage(pizza,`https://kulinaria.ge/receptebi/pica-saxlis-pirobebSi_209/`);
  })
  bot.onText(/პიცის მომზადების წესი/,(msg)=>{
    const piza=msg.chat.id;
    bot.sendMessage(piza,`https://kulinaria.ge/receptebi/pica-saxlis-pirobebSi_209/`);
  })
  bot.onText(/იმერული ხაჭაპურის მომზადების წესი/,(msg)=>{
    const imer=msg.chat.id;
    bot.sendMessage(imer,`https://kulinaria.ge/receptebi/imeruli-xaWapuri_639/`);
  })
  bot.onText(/იმერული ხაჭაპურის რეცეპტი/,(msg)=>{
    const imeri=msg.chat.id;
    bot.sendMessage(imeri,`https://kulinaria.ge/receptebi/imeruli-xaWapuri_639/`);
  })
