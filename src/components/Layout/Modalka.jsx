import { useState } from "react"
function Modalka(){
    let [color,setColor]=useState(false);
    let [have,setHave]=useState(false);
    let [currentLanguage, setCurrentlanguage]=useState("uz");
    
    let text={
      text_ru:"Мы, единственный народ Узбекистана, торжественно заявляя о своей верности правам и свободам человека, национальным и общечеловеческим ценностям, принципам государственного суверенитета, демонстрируя нашу приверженность идеалам демократии, свободы и равенства, социальной справедливости и солидарности, осознавая свою высокую ответственность перед нынешним и будущими поколениями за построение гуманного демократического государства, открытого и справедливого общества, в котором человек, его жизнь, свобода, честь и достоинство считаются высшей ценностью,опираясь на исторический опыт развития нашей государственности на протяжении более трех тысяч лет, а также на научное, культурное и духовное наследие наших великих предков, внесших несравненный вклад в мировую цивилизацию,искренне полны решимости увеличить бесценные природные ресурсы нашей страны и сохранить их для нынешнего и будущих поколений, а также сохранить чистоту окружающей среды, основанный на общепризнанных принципах и нормах международного права, Международное сообщество Узбекистана, прежде всего, стремится укреплять и развивать дружественные отношения с соседними странами на основе сотрудничества, взаимной поддержки, мира и согласия. в целях обеспечения достойной жизни граждан, межэтнического и межконфессионального согласия, благополучия и процветания нашей многонациональной Родины Узбекистана, Мы принимаем и объявляем эту Конституцию.",
      text_uz:"Biz, O‘zbekistonning yagona xalqi, inson huquq va erkinliklariga, milliy va umuminsoniy qadriyatlarga, davlat suvereniteti prinsiplariga sodiqligimizni tantanali ravishda e’lon qilib,demokratiya, erkinlik va tenglik, ijtimoiy adolat va birdamlik g‘oyalariga sadoqatimizni namoyon qilib,inson, uning hayoti, erkinligi, sha’ni va qadr-qimmati oliy qadriyat hisoblanadigan insonparvar demokratik davlatni, ochiq va adolatli jamiyatni barpo etish borasida hozirgi va kelajak avlodlar oldidagi yuksak mas’uliyatimizni anglagan holda,davlatchiligimiz rivojining uch ming yildan ziyod tarixiy tajribasiga, shuningdek jahon sivilizatsiyasiga beqiyos hissa qo‘shgan buyuk ajdodlarimizning ilmiy, madaniy va ma’naviy merosiga tayanib,mamlakatimizning bebaho tabiiy boyliklarini ko‘paytirishga hamda hozirgi va kelajak avlodlar uchun asrab-avaylashga hamda atrof-muhit musaffoligini saqlashga astoydil ahd qilib, xalqaro huquqning umume’tirof etilgan prinsip va normalariga asoslangan holda,  O‘zbekistonning jahon hamjamiyati, eng avvalo, qo‘shni davlatlar bilan do‘stona munosabatlarini hamkorlik, o‘zaro qo‘llab-quvvatlash, tinchlik va totuvlik asosida mustahkamlash hamda rivojlantirishga intilib, fuqarolarning munosib hayot kechirishini, millatlararo va konfessiyalararo totuvlikni, ko‘p millatli jonajon O‘zbekistonimizning farovonligini va gullab-yashnashini ta’minlashni maqsad qilgan holda, ushbu Konstitutsiyani qabul qilamiz va e’lon qilamiz",
    };
    function changeLanguage(){
       setCurrentlanguage(currentLanguage==="uz" ? "ru":"uz");
    }

    const toggleColor=()=>{
        setColor(!color);
    }
    const haveBtn=()=>{
        setHave(!have);
        console.log('on');
    }
    return(

        <>
          <div className="container">
          <button className="changeLang" onClick={()=>changeLanguage()}>Change language</button>
            <h1>MODALKA</h1>
             <p className={color ? "red":"" }
             id="black">{text[`text_${currentLanguage}`]}</p>
             <button className="bigBtn" onClick={haveBtn}>YOZUV RANGINI O'ZGARTIRISH</button>
             <div className={`modal ${have ? "having":""}`} id="modal">
               <p>Yozuv rangi o'zgarishiga ruxsat berish</p>
               <div>
                <button className="add" onClick={toggleColor}>Ruxsat berish</button>
                <button className="remove" onClick={haveBtn}>Chiqish</button>
               </div>
            </div>
          </div>
          {have && <div className="dark-area" onClick={haveBtn}></div>}
        </>
    )
}
export default Modalka
