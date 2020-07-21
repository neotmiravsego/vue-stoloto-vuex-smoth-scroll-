import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        list: {
            sectionOne: [{
                title_list: "Самые крупные выигрыши в «Русском лото»",
                title: "Наталья Власова — 506 000 000 рублей. ",
                content: " 1 204-й тираж, трансляция от 5 ноября 2017 года. Деньги пенсионерка решила потратить на покупку жилья, отдых, образование дочери и благотворительность.",
                img: "/one.svg",
                id: 1
            },
            {
                title: "Любовь и Сергей Догоровы — 500 000 000 рублей. ",
                content: "1 264-й тираж, трансляция от 1 января 2019 года. Победители вложились в путешествия, покупку квартиры, помощь родственникам и благотворительность. Часть суммы собираются инвестировать. ",
                img: "/two.svg",
                id: 2
            },
            {
                title: "Николай и Оксана Мирошниченко — 500 000 000 рублей. ",
                content: " 1 264-й тираж, трансляция от 1 января 2019 года. Полмиллиарда планируют потратить на путешествия, выплату ипотеки, помощь родственникам и благотворительность.",
                img: "/three.svg",
                id: 3
            },],
            sectionTwo: [{
                title: "На сайте ",
                content: " <a href='#'>Здесь</a> можно найти билеты с любимыми числами и купить разом до 100 штук. А ещё доступна опция заказа пяти билетов, в которых будут все числа от 1 до 90. ",
                img: "/oneItem.svg",
                id: 4
            },
            {
                title: "В мобильном приложении ",
                content: " Удобно покупать билеты с iOS и Android, следить за результатами розыгрышей и смотреть трансляции. ",
                img: "/twoItem.svg",
                id: 5
            },
            {
                title: "В розничных точках продаж  ",
                content: " На карте можно найти киоски, лотерейные аппараты и партнёрские магазины: «Почта России», «Связной», «Билайн», «МегаФон», «Ростелеком», Tele2, «Перекрёсток», «Пятёрочка», «Бристоль». ",
                img: "/itemThree.svg",
                id: 6
            },
            {
                title: "Через SMS  ",
                content: " Нужно найти на специальной странице идентификационный код лотереи и прислать его SMS-сообщением на номер 9999. Деньги спишутся с баланса мобильного телефона. ",
                img: "/fourIcon.svg",
                id: 7
            }
                , {
                title: "На сайте ",
                content: " можно найти билеты с любимыми числами и купить разом до 100 штук. А ещё доступна опция заказа пяти билетов, в которых будут все числа от 1 до 90. ",
                img: "/fiveItem.svg",
                id: 8
            }],
            sectionThree: [{
                title: "Первый тур ",
                content: " Выигрывают билеты, в которых пять чисел в любой из строк раньше других совпадут с номерами бочонков, вынутых ведущим из мешка. Раньше других — значит раньше, чем в других билетах, участвующих в тираже. ",
                img: "/one.svg",
                id: 9
            },
            {
                title: "Второй тур ",
                content: "Здесь выигрывают те билеты, в которых оказались зачёркнуты все 15 чисел в верхнем или нижнем поле. Если это случилось на пятнадцатом ходу, поздравляем — вы выиграли джекпот.",
                img: "/two.svg",
                id: 10
            },
            {
                title: "Третий и последующие туры ",
                content: " На этих этапах выигрывают билеты, в которых раньше других совпадут все 30 чисел.",
                img: "/three.svg",
                id: 11
            },
            {
                title: "«Кубышка» ",
                content: " Дополнительный тур, который проводят не всегда. В нём выигрывают билеты, где все невыпавшие в тираже числа оказываются в одном поле — верхнем или нижнем.",
                img: "/four.svg",
                id: 12
            }],
            sectionFour: [{
                title: "Посмотреть трансляцию  ",
                content: " Проверенный способ узнать результат раньше всех и хорошая семейная традиция. Трансляция розыгрышей проходит каждое воскресенье в программе «У нас выигрывают!» на НТВ.",
                img: "/one.svg",
                id: 13
            },
            {
                title: "Проверить числа в архиве тиражей  ",
                content: " Найдите номер тиража, указанный на билете, и узнайте, какие бочонки ведущий вынул из мешка во время трансляции. Либо введите номер билета на специальной странице и проверьте, счастливый ли он. ",
                img: "/two.svg",
                id: 14
            },
            {
                title: "Получить SMS  ",
                content: " Если при покупке билета вы указывали номер телефона, на него придёт сообщение о выигрыше свыше 15 тысяч рублей.",
                img: "/three.svg",
                id: 15
            },
            {
                title: "Проверить результаты в мобильном приложении ",
                content: " Программа для iOS и Android предоставляет архив тиражей и присылает push-уведомления со свежими результатами. Также в приложении можно покупать билеты, изучать программу предстоящих розыгрышей и смотреть трансляции. ",
                img: "/four.svg",
                id: 16
            }
                , {
                title: "Спросить результаты в точках распространения билетов ",
                content: " На случай, если под рукой ни компьютера, ни телефона, а ждать совсем не хочется. ",
                img: "/five.svg",
                id: 17
            },
            {
                title: "Узнать в газете ",
                content: "Результаты тиражей публикуются по средам в «Аргументах и фактах». ",
                img: "/six.svg",
                id: 18
            },
            {
                title: "Узнать по телефону   ",
                content: "Номер круглосуточной горячей линии: 8 (900) 555 00 55.",
                img: "/seven.svg",
                id: 19
            }],
            sectionFive: [{
                title: "Перевести на баланс кошелька «Столото» — до 100 000 рублей ",
                content: " Этот вариант подойдёт, если вы указали номер телефона при покупке. Зарегистрируйтесь на сайте с этим номером и выберите «Перевести выигрыш в кошелёк» на странице информации о билете. Эти деньги можно использовать для покупки новых билетов. ",
                img: "/bOne.svg",
                id: 20
            },
            {
                title: "Забрать в точке продаж — до 2 000 рублей  ",
                content: " Чтобы найти подходящую точку, нужно выбрать на странице с картой «Столото» пункт «Получить выигрыш» и ввести сумму выигрыша.",
                img: "/bTwo.svg",
                id: 21
            },
            {
                title: "Перевести на лицевой счёт — от 100 000 рублей   ",
                content: " Для получения выигрыша нужно предоставить комплект документов и реквизиты счёта. Подробности — на сайте «Столото». ",
                img: "/bThree.svg",
                id: 22
            },
            {
                title: "В лотерейном центре «Столото» в Москве можно получить любую сумму.  ",
                content: "",
                img: "/oneItem.svg",
                id: 23
            }]
        },
    },
    getters: {
        section_state(state) {
            return state.list;
        },
    },
});
export default store;