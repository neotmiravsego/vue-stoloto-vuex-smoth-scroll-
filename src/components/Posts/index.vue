<template>

  <div class="container">
    <ul class="list-posts">
      <li class="lists-posts__item">
        <div class="post-card">
          <div class="title-content__wrap">
            <h2 class="title-post">Как устроено Русское Лото</h2>
            <p class="description-title">
              Когда недорогой билет обещает миллионный выигрыш, мы ждём подвоха. Но лотерея не чёрный ящик. В подробностях рассказываем,
              кто следит за соблюдением правил, сколько денег можно выиграть и как их забрать.
            </p>
          </div>
          <div class="content-card__wrap">
            <p class="content-txt">
              «Русское лото» — это всероссийская государственная лотерея, напоминающая народную игру в лото.
              С момента появления лотереи в XVI веке в Италии правила существенно не изменились: в современном лото тоже не нужно придерживаться стратегий и просчитывать ходы. Прелесть игры в полном доверии случаю, низкой стоимости билета и возможности получить гораздо больше, чем поставлено на кон.
              В этом году лотерее исполнится 25 лет. Первый выпуск «Русского лото» состоялся 16 октября 1994 года.
              Всё это время её бессменно ведёт Михаил Борисов — тот самый жизнерадостный мужчина с седыми усами в жилетке, которого вы видели по телевизору.
            </p>
            <div class="img-wrap__content">
              <img src="../../assets/img/cardOne.png" alt="Картиночка" class="img-content" />
            </div>
            <div class="content__wrap">
              <p class="content-txt">
                Михаил Борисов никогда не был просто харизматичным ведущим. С первого выпуска он выступал настоящим идеологом лотереи и отвечал за концепцию программы.
                Именно он придумал сделать из игры культурно-развлекательную семейную передачу.
                В программу приглашали выступать известных и начинающих звёзд, разыгрывали сценки, рассказывали об исторических событиях, связанных с номером тиража. А ещё Михаил Борисов не пропустил ни одного выпуска за 25 лет.
              </p>
              <p
                class="content-txt"
              >Сейчас в «Русском лото» разыгрывают автомобили, загородные дома, путешествия и крупные денежные призы, но раньше победителям вручалась и бытовая техника: холодильники, телевизоры, утюги и пылесосы.</p>
              <p class="content-txt">
                За последние 8 лет в программе разыграли больше 24 миллиардов рублей, состоялось несколько помолвок, выходили в эфир и участвовали в тиражах космонавты,
                а Михаил Борисов перетаскал такое количество мешков с бочонками, что, по его словам, мог бы вручную перегородить Енисей или построить ГЭС.
              </p>
            </div>

            <div class="card-comment">
              <p class="comment-txt">
                Лотерея стала сразу всероссийской, она воспринималась как абсолютное чудо.
                В 90-е годы наша программа была одной из немногих, где действительно исполнялись мечты.
              </p>
              <p class="comment-inf">
                Михаил Борисов в
                <a href="#" class="comment-link">интервью</a> для «Дни.ру»
              </p>
            </div>
          </div>
        </div>
      </li>
      <li class="lists-post__item" id="whatWin">
        <div class="post-card">
          <div class="title-content__wrap">
            <h2 class="title-post">Что можно выйграть</h2>
          </div>
          <div class="img-wrap__content">
            <img src="../../assets/img/twoPost.jpg" alt="Картиночка" class="img-content" />
          </div>
          <div class="content-card__wrap">
            <p
              class="content-txt"
            >В первых турах можно выиграть от нескольких тысяч до нескольких миллионов рублей, а также автомобили, загородные дома и путешествия. Все выигрыши можно получить в денежном эквиваленте.</p>
            <p class="content-txt">
              Самый крупный приз — джекпот. Это десятки и даже сотни миллионов рублей, он накапливается от тиража к тиражу. Джекпот можно выиграть, если 15 чисел верхнего или нижнего поля билета совпадут с номерами на первых 15 бочонках, вытянутых ведущим из мешка. Сумма рекордного джекпота в «Русском лото» уже больше
              900 000 000 рублей.
            </p>
            <div class="img-wrap__content">
              <img src="../../assets/img/dr.png" alt="Картиночка" class="img-content" />
            </div>
            <div class="content__wrap">
              <p class="content-txt">
                Призовой фонд формируется из половины стоимости всех проданных билетов.
                С начала 2019 года общая сумма выигрышей составила свыше 3 миллиардов рублей. Победителями стали около 2 миллионов участников лотереи.
              </p>
            </div>
          </div>
        </div>
        <ListItem :section_data="section_state.sectionOne" />
        <div class="content__wrap">
          <p
            class="content-txt"
          >В России все лотереи государственные и регулируются Федеральным законом № 138-ФЗ. Организаторами розыгрышей выступают Министерство спорта РФ и Министерство финансов РФ. Они утверждают условия лотерей и заключают контракты с операторами. Часть денег, вырученных от продажи билетов, идёт на финансирование государственных программ по развитию физической культуры и спорта.</p>
        </div>
      </li>
      <li class="lists-post__item" id="where">
        <div class="post-card">
          <div class="title-content__wrap">
            <h2 class="title-post">Где купить билеть</h2>
          </div>
          <div class="img-wrap__content">
            <img src="../../assets/img/kasse.jpg" alt="Картиночка" class="img-content" />
          </div>
          <ListItem :section_data="section_state.sectionTwo" />
        </div>
        <div class="card-comment">
          <p
            class="comment-txt comment-section__three"
          >Продажи билетов на воскресный тираж закрываются в субботу в 17:20 по московскому времени.</p>
        </div>
      </li>
      <li class="lists-post__item" id="assPlay">
        <div class="post-card">
          <div class="title-content__wrap">
            <h2 class="title-post">Как играть</h2>
          </div>
          <div class="img-wrap__content">
            <img src="../../assets/img/checkListNumber.jpg" alt="Картиночка" class="img-content" />
          </div>
          <div class="content__wrap">
            <p class="content-txt">
              Михаил Борисов никогда не был просто харизматичным ведущим. С первого выпуска он выступал настоящим идеологом лотереи и отвечал за концепцию программы.
              Именно он придумал сделать из игры культурно-развлекательную семейную передачу.
              В программу приглашали выступать известных и начинающих звёзд, разыгрывали сценки, рассказывали об исторических событиях, связанных с номером тиража. А ещё Михаил Борисов не пропустил ни одного выпуска за 25 лет.
            </p>
            <p
              class="content-txt"
            >Сейчас в «Русском лото» разыгрывают автомобили, загородные дома, путешествия и крупные денежные призы, но раньше победителям вручалась и бытовая техника: холодильники, телевизоры, утюги и пылесосы.</p>
            <p class="content-txt">
              За последние 8 лет в программе разыграли больше 24 миллиардов рублей, состоялось несколько помолвок, выходили в эфир и участвовали в тиражах космонавты,
              а Михаил Борисов перетаскал такое количество мешков с бочонками, что, по его словам, мог бы вручную перегородить Енисей или построить ГЭС.
            </p>
          </div>
        </div>
      </li>
      <li class="lists-post__item" id="tours">
        <div class="post-card">
          <div class="title-content__wrap">
            <h2 class="title-post">Туры лотереи</h2>
          </div>
          <div class="img-wrap__content">
            <img src="../../assets/img/whatPlay.jpg" alt="Картиночка" class="img-content" />
          </div>
          <ListItem :section_data="section_state.sectionThree" />
        </div>
      </li>
      <li class="lists-post__item" id="result">
        <div class="post-card">
          <div class="title-content__wrap">
            <h2 class="title-post">Где узнать результаты</h2>
          </div>
          <div class="img-wrap__content">
            <img src="../../assets/img/result.jpg" alt="Картиночка" class="img-content" />
          </div>
          <div class="content__wrap">
            <p class="content-txt">
              Михаил Борисов никогда не был просто харизматичным ведущим. С первого выпуска он выступал настоящим идеологом лотереи и отвечал за концепцию программы.
              Именно он придумал сделать из игры культурно-развлекательную семейную передачу.
              В программу приглашали выступать известных и начинающих звёзд, разыгрывали сценки, рассказывали об исторических событиях, связанных с номером тиража. А ещё Михаил Борисов не пропустил ни одного выпуска за 25 лет.
            </p>
            <p class="content-txt">
              За последние 8 лет в программе разыграли больше 24 миллиардов рублей, состоялось несколько помолвок, выходили в эфир и участвовали в тиражах космонавты,
              а Михаил Борисов перетаскал такое количество мешков с бочонками, что, по его словам, мог бы вручную перегородить Енисей или построить ГЭС.
            </p>
          </div>
          <ListItem :section_data="section_state.sectionFour" />
        </div>
      </li>
      <li class="lists-post__item" id="get">
        <div class="post-card">
          <div class="title-content__wrap">
            <h2 class="title-post">Как получить выигрыш</h2>
          </div>
          <div class="img-wrap__content">
            <img src="../../assets/img/call.jpg" alt="Картиночка" class="img-content" />
          </div>
          <div class="content__wrap">
            <p class="content-txt">
              Михаил Борисов никогда не был просто харизматичным ведущим. С первого выпуска он выступал настоящим идеологом лотереи и отвечал за концепцию программы.
              Именно он придумал сделать из игры культурно-развлекательную семейную передачу.
              В программу приглашали выступать известных и начинающих звёзд, разыгрывали сценки, рассказывали об исторических событиях, связанных с номером тиража. А ещё Михаил Борисов не пропустил ни одного выпуска за 25 лет.
            </p>
            <p class="content-txt">
              За последние 8 лет в программе разыграли больше 24 миллиардов рублей, состоялось несколько помолвок, выходили в эфир и участвовали в тиражах космонавты,
              а Михаил Борисов перетаскал такое количество мешков с бочонками, что, по его словам, мог бы вручную перегородить Енисей или построить ГЭС.
            </p>
          </div>
          <div class="list-section__wrap">
            <p class="title-list">Где забрать деньги</p>
            <p
              class="description-title__list"
            >В зависимости от суммы есть несколько способов забрать приз:</p>
            <ListItem :section_data="section_state.sectionFive" />
          </div>
          <div class="content__wrap">
            <p class="title-list">Какие налоги придётся заплатить</p>
            <p
              class="content-txt"
            >Налог с выигрыша для россиян составляет 13%. Для нерезидентов РФ — 30%. Если за год вы выиграли не больше 4 000 рублей, ничего платить не нужно.</p>
            <p class="content-txt">
              Выплату от 15 000 рублей вы получите уже с удержанным налогом 13%. Если выигрыш меньше 15 000 рублей, нужно подать в налоговый орган по месту жительства декларацию, оформленную по форме 3-НДФЛ, а потом заплатить налог в банке или онлайн.
              То же самое придётся сделать для получения вещевого приза: например, автомобиля или квартиры.
            </p>
            <p
              class="content-txt"
            >Каждый выигрыш фиксируется в системе Федеральной налоговой службы. Все невостребованные выигрыши перечисляются в госбюджет, так как организатор лотерей — государство.</p>
          </div>
        </div>
      </li>
    </ul>
    <button class="play-loto">Играть в «Русское лото»</button>
  </div>
  
</template>

<script>
import ListItem from "../ListItem";
import { mapGetters } from "vuex";

export default {
  components: {
    ListItem
  },
  computed: {
    ...mapGetters(["section_state"])
  }
};
</script>

<style lang="scss" scoped>
.lists-post__item {
  .card-comment {
    margin-bottom: 40px;
  }
}
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 740px;
  @media (max-width: $MidlleWidth - 1px) {
    padding: 0 48px;
  }
  @media (max-width: $MidlleWidth - 1px) {
    padding: 0 15px;
  }
}
.title-post {
  margin-bottom: 30px;
  text-align: left;
  font-weight: bold;
  font-size: 48px;
  @media (max-width: $MidlleWidth - 1px) {
    font-size: 36px;
  }
  @media (max-width: $TableWidth - 1px) {
    margin-bottom: 20px;
    font-size: 24px;
  }
}
.description-title {
  margin-bottom: 40px;
  font-size: 20px;
  line-height: 28px;
  text-align: justify;
  color: #040404;
  @media (max-width: $TableWidth - 1px) {
    font-size: 18px;
    text-align: left;
  }
  @media (max-width: $TableWidth - 1px) {
    margin-bottom: 25px;
  }
}
.content-txt {
  margin-bottom: 40px;
  line-height: 26px;
  font-size: 18px;
  text-align: justify;
  @media (max-width: $TableWidth - 1px) {
    margin-bottom: 30px;
    text-align: left;
    font-size: 16px;
    line-height: 24px;
  }
}
.img-content {
  margin-bottom: 40px;
  object-fit: cover;
  width: 100%;
}
.card-comment {
  text-align: left;
}
.comment-txt {
  padding: 0 70px 0 20px;
  border-left: 2px solid red;
  line-height: 26px;
  font-weight: bold;
  @media (max-width: $TableWidth - 1px) {
    padding-right: 0;
    font-size: 15px;
  }
}
.comment-section__three {
  position: relative;
  border: none;
  padding: 0;
  max-width: 570px;
  &::before {
    content: "";
    position: absolute;
    bottom: -22px;
    left: 0;
    height: 3px;
    width: 50px;
    background: #ed5e42;
  }
  &::after {
    content: "";
    position: absolute;
    top: -22px;
    left: 0;
    height: 3px;
    width: 50px;
    background: #ed5e42;
  }
}
.comment-link {
  color: #3670f9;
  text-decoration: underline;
  &:hover {
    color: #ed5e42;
  }
  &:visited {
    color: #9197a3;
  }
}
.comment-inf {
  padding-left: 20px;
  margin-top: 14px;
  text-align: left;
  line-height: 22px;
}
.lists-posts__item {
  margin-bottom: 60px;
  @media (max-width: $TableWidth - 1px) {
    margin-bottom: 25px;
  }
}

.title-list {
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
}
.description-title__list {
  margin-bottom: 30px;
  text-align: left;
  font-size: 18px;
}
.play-loto {
  max-width: 743px;
  padding: 10px 0;
  margin: 0 auto 66px;
  background: #ed5e42;
  width: 100%;
  text-align: center;
  border: none;
  outline: none;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: white;
}
</style>