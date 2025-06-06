import React from 'react'
import { ParagraphSection, ReturnButtonTop } from './Component';

const warning1 = [
    {
        title: "Запрещенные вещества",
        description: "Не употребляйте, не храните и не распространяйте наркотики! В Турции это карается уголовным наказанием. Не поддавайтесь на уловки продавцов в туристических районах.",
        borderColor: "border-red-500",
        bgColor: "bg-red-500",
    },
    {
        title: "Уловки продавцов наркотиков",
        description: "Не попадитесь на различные уловки продавцов, предлагающие 'безобидные легкие наркотики'! Особенно в общественных местах или туристических районах.",
        borderColor: "border-orange-500",
        bgColor: "bg-orange-500",
    },
    {
        title: "Юридические последствия",
        description: "Нарушение законодательства о наркотических средствах может привести к тюремному заключению и депортации. Соблюдайте законы страны, чтобы избежать неприятностей.",
        borderColor: "border-yellow-500",
        bgColor: "bg-yellow-500",
    },
    {
        title: "Риски для здоровья и безопасности",
        description: "Употребление наркотиков несет высокий риск для здоровья и безопасности. Следите за своим состоянием и не подвергайте себя опасности.",
        borderColor: "border-blue-500",
        bgColor: "bg-blue-500",
    }
];

const warning2 = [
    {
        title: "Обмен валюты",
        description: "Не меняйте валюту у случайных людей или в неофициальных обменных пунктах. Это может привести к обману или мошенничеству. Пользуйтесь услугами официальных обменных пунктов и местных банков.",
        borderColor: "border-red-500",
        bgColor: "bg-red-500",
    },
    {
        title: "Крупные суммы наличных",
        description: "Не носите с собой крупные суммы наличных денег после обмена валюты. Сразу положите деньги на карту или в безопасное место.",
        borderColor: "border-orange-500",
        bgColor: "bg-orange-500",
    },
    {
        title: "Риски мошенничества и кражи",
        description: "Использование официальных и проверенных мест для обмена валюты защищает вас от мошенничества и гарантирует получение справедливого курса. Ношение крупных сумм наличных увеличивает риск кражи.",
        borderColor: "border-yellow-500",
        bgColor: "bg-yellow-500",
    }
];

const warning3 = [
    {
        title: "Не доверяйте незнакомцам",
        description: "Не доверяйте незнакомым людям, которые предлагают Вам 'выгодные' сделки или просят о помощи. Это могут быть мошенники, которые попытаются завладеть Вашими деньгами или личной информацией.",
        borderColor: "border-red-500",
        bgColor: "bg-red-500",
    },
    {
        title: "Не переводите деньги на неизвестные счета",
        description: "Не переводите деньги на неизвестные счета или через сомнительные онлайн-платформы. Даже если предложение кажется выгодным, проверьте его подлинность.",
        borderColor: "border-orange-500",
        bgColor: "bg-orange-500",
    },
    {
        title: "Не открывайте подозрительные ссылки и вложения",
        description: "Не открывайте подозрительные ссылки или вложения в электронных письмах. Мошенники часто используют фишинг, чтобы получить доступ к Вашим личным данным.",
        borderColor: "border-yellow-500",
        bgColor: "bg-yellow-500",
    },
    {
        title: "Осторожность и проверка подлинности",
        description: "Мошеннические схемы могут привести к значительным финансовым потерям, краже личных данных и другим негативным последствиям. Важно всегда быть настороже и проверять подлинность любых предложений и транзакций.",
        borderColor: "border-blue-500",
        bgColor: "bg-blue-500",
    }
];

const warning4 = [
    {
        title: "Не принимайте чужой багаж",
        description: "Не принимайте чужой багаж перед полетом или другим видом транспортировки, даже за оплату в крупную сумму. Это может привести к серьезным юридическим последствиям, включая арест и уголовное преследование. Всегда помните о трагической судьбе нашей землячки Акжаркын Турлыбай, которая находясь за рубежом согласилась перевезти за оплату чужой багаж, в котором оказались наркотики. Она получила пожизненное тюремное заключение.",
        borderColor: "border-orange-500",
        bgColor: "bg-orange-500",
    },
    {
        title: "Не соглашайтесь перевозить чужие вещи",
        description: "Не соглашайтесь перевозить чужие вещи или багаж, даже если об этом просит знакомый. Вы не можете знать, что находится внутри, и содержание может быть запрещённым к перевозке.",
        borderColor: "border-red-500",
        bgColor: "bg-red-500",
    },
    {
        title: "Риски контрабанды и уголовной ответственности",
        description: "Принятие чужого багажа для переправки может оказаться частью контрабандной схемы или попыткой передать запрещенные или незаконные предметы через границу. Ответственность за содержимое багажа несет тот, кто его перевозит, поэтому лучше отказаться от любых предложений перевозить чужие вещи.",
        borderColor: "border-yellow-500",
        bgColor: "bg-yellow-500",
    }
];

const warning5 = [
    {
        title: "Планирование путешествия",
        description: "Турция - красивейшая страна с множеством туристических достопримечательностей. Не путешествуйте без плана и без информации о месте назначения.",
        borderColor: "border-red-500",
        bgColor: "bg-red-500",
    },
    {
        title: "Медицинская и туристическая страховка",
        description: "Не пренебрегайте страховкой. Убедитесь, что у Вас есть медицинская и туристическая страховка.",
        borderColor: "border-orange-500",
        bgColor: "bg-orange-500",
    },
    {
        title: "Подготовка к путешествию",
        description: "Подготовка к путешествию помогает избежать непредвиденных ситуаций и расходов, а также сохранить здоровье и имущество.",
        borderColor: "border-yellow-500",
        bgColor: "bg-yellow-500",
    }
];

const warning6 = [
    {
        title: "Осторожность в социальных сетях",
        description: "Не публикуйте в социальных сетях слишком много личной информации. Это может привлечь внимание злоумышленников.",
        borderColor: "border-red-500",
        bgColor: "bg-red-500",
    },
    {
        title: "Не сообщайте в реальном времени о местонахождении",
        description: "Не сообщайте в реальном времени о своем местонахождении. Лучше публиковать фотографии и сообщения после того, как покинете место.",
        borderColor: "border-orange-500",
        bgColor: "bg-orange-500",
    },
    {
        title: "Риски от публикаций в соцсетях",
        description: "Мошенники могут использовать информацию из социальных сетей для планирования неправомерных действий.",
        borderColor: "border-yellow-500",
        bgColor: "bg-yellow-500",
    }
];



const Page13 = () => {
    return (
        <>
        <ReturnButtonTop />
            <div className='container mx-auto px-4 md:px-0'>
                <h1 className='text-3xl font-bold text-center mt-10'>
                    ДОПОЛНИТЕЛЬНАЯ <span>ПОЛЕЗНАЯ</span> ИНФОРМАЦИЯ
                </h1>
            </div>
            <ParagraphSection
                services={warning1}
                title="Правила и условия"
                subtitle="Недопустимость использования наркотических средств"
            />
            <ParagraphSection
                services={warning2}
                subtitle="Ошибки при обмене валют"
            />
            <ParagraphSection
                services={warning3}
                subtitle="Осторожность с мошенническими схемами"
            />

            <ParagraphSection
                services={warning4}
                subtitle="Недопустимость принятия чужого багажа для переправки"
            />

            <ParagraphSection
                services={warning5}
                subtitle="Недооценка рисков в путешествиях"
            />

            <ParagraphSection
                services={warning6}
                subtitle="Неправильное использование социальных сетей"
            />
        </>
    )
}

export default Page13