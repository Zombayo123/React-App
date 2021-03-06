import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import data from '../../images/data.jpg';
import weather from '../../images/weather.jpg';
import overview from '../../images/overview.gif';
import climatic_system from '../../images/climatic_system.JPG';
import hydrological_model from '../../images/hydrological_model.png';


export default class Hydro extends Component {


  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-md-12">
            <p className="hello">
              Сектор Автоматизирани Системи и База Данни
            </p>
            <img src={data} className="data" alt="data" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <br />
            <p className="basicActivities">В структурата на филиала, секторът има решаващо значение по отношение на :</p>
            <ul>
              <li>Осигуряване на достъп до оперативната хидро-метеорологична информация на всички останали звена на НИМХ.</li>
              <br />
              <li>Събиране и съхранение на оперативната хидро-метеорологична информация.</li>
              <br />
              <li>Следене и навременно коригиране на потока информация постъпващ от хидро и метео обсерватории, климатични станции и дъждомерни постове. Поправяне на сгрешените съобщения преди повторното им изпращане за НИМХ - София.</li>
              <br />
              <li>Следене на работата и анализ на резултатите от 115 бр. автоматични телеметрични станции, включително 44 хидрологични, както и извършване на дейностите по поддръжката им.</li>
              <br />
              <li>Поддържане и развитие на цялостната информационна система на филиала: бази данни, софтуер за пренос на информация в мрежата, за попълване, съхранение и визуализиране на хидро-метеорологична информация.</li>
              <br />
              <li>Внедряване и адаптация на хидроложки диагностичен и прогностичен модел и метеороложки модел за приземния слой на атмосферата.</li>
              <br />
              <li>Архивиране, обработка и осигуряване на данни от спътникова и радарна информация.</li>
            </ul>
          </div>

          <div className="col-md-6">
            <br />
            <img src={weather} className="weather" alt="weather" />
            <br />
            <br />
            <img src={overview} className="overview" alt="overview" />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <p className="hydroModel">Moделиране на повърхностните процеси, хидроложко моделиране и свръхкраткосрочна прогноза на оттока в басейните на реките Марица, Арда и Тунджа.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">         
              <p>
                  Моделирането на повърхносните процеси в метеорологията е клон на метеорологичното моделиране, който свързва атмосферните процеси и параметри (температура, валеж, сл. греене и др.) с процесите и параметрите на земната повърхност - влажност на почвата, температура на почвата, изменение на снежната покривка и речен отток.
                  Когато оценката на повърхностните процеси е направена при наличие на достатъчно подробни данни за физико-географската зона на интерес и със съвременни научни методи, тя позволява оценка на важни за стопанството параметри : воден запас в почвата и снежната покривка, речен отток и др.
                  При наличие на достатъчно надеждни прогнозни данни за валежите и температурата (тези прогнози непрекъснато се усъвършенствуват при използване включително на спътникова информация) оценката на параметрите на земната повърхност може да се направи за бъдещи периоди и да се даде прогноза за изменението на почвената влага, снегозапаса и оттока в реките.
                  Хидроложкото моделиране от своя страна позволява правилното разпределение на речния отток в речната мрежа по време и място. При планински райони е важно да се отчете правилно снегонатрупването, тъй като то е основен оттоко-образуващ фактор при снеготопенето. Другата специфична черта на планинските райони е натрупването на воден запас в горската покривка и в скалните породи под нея тъй като тези "резервоари" осигуряват в голяма степен оттока през летния период - маловодието.
                  В разработения проект "Моделиране на повърхностните процеси и хидроложко моделиране на басейна на реките Марица, Тунджа и Арда" са приспособени за южно-българските водосборни райони модерен физичен модел за повърхносните процеси и площно разпределен хидроложки модел за изчисляване на речния отток. Последната част на проекта включва изследване на влиянието на големите водохранилища в района и включването им при моделирането.
                  Установено е че, при захранване на моделите с подробна и качествена входна информация, се получават много близки до реалните, данни за еволюцията на снежната покривка, влагата в почвата и оттока в речната мрежа. При това резултатите се получават за всяка една точка от изследвания район, независимо че реални наблюдения не са възможни върху цялата площ на изследваната зона.
                  Необходимите за работата на модела данни ежедневно постъпват в структурите на НИМХ - БАН. Резултата от този проект може да се използва за текущ мониторинг на водния режим на почвите и реките, което е особено полезно за развитието на енергетиката, туризма и селското стопанство.
              </p>
          </div>

          <div className="col-md-6">
            <img src={climatic_system} className="climatic_system" alt="climatic_system" />
            <br/>
            <br/>
            <img src={hydrological_model} className="hydrological_model" alt="hydrological_model" />
          </div>
        </div>

      </div>
    );
  }
}


