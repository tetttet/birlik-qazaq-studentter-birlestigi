import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';
import img7 from '../../assets/images/img7.png';


import PropTypes from 'prop-types';

function Row({ translateClass, direction }) {

    const items = [
        { text: "Адамдарға көмектесеміз", image: "https://images.unsplash.com/photo-1672939113761-f599cebb325f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2F6YWtofGVufDB8fDB8fHww" },
        { text: "Әркімге түсінікті", image: "https://plus.unsplash.com/premium_photo-1661833822591-0fb1f995ea65?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" },
        { text: "Жылулықпен және қамқорлықпен", image: "https://plus.unsplash.com/premium_photo-1670552850934-71c33fd7f1d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2F6YWtofGVufDB8fDB8fHww" },
        { text: "Қолдау әрдайым жанымызда", image: "https://plus.unsplash.com/premium_photo-1674458852518-396eaee81d63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" },
        { text: "Әр адамға сезімталдық", image: "https://images.unsplash.com/photo-1717225054383-127d7ff9d901?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" },
        { text: "Қарапайым және түсінікті", image: img2 },
        { text: "Жақсылық жасаймыз", image: "https://plus.unsplash.com/premium_photo-1674458852518-396eaee81d63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" },
        { text: "Ұсақ-түйекке мән береміз", image: img5 },
        { text: "Тез әрі оңай түсінуге болады", image: img2 },
        { text: "Ашық жүрекпен", image: "https://plus.unsplash.com/premium_photo-1661833822591-0fb1f995ea65?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" },
        { text: "Әрдайым байланыстамыз", image: img1 },
        { text: "Шын көңілмен", image: "https://plus.unsplash.com/premium_photo-1661833822591-0fb1f995ea65?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" },
        { text: "Қамқорлық — басты орында", image: img5 },
        { text: "Кез келген адамға қолжетімді", image: img2 },
        { text: "Әр адам біз үшін маңызды", image: img4 },
    ];



    return (
        <div
            className={`${translateClass} ${direction} row w-full flex 
        items-center  
        gap-8 
        whitespace-nowrap mb-2`}
        >
            {items.map((item, index) => {
                return (
                    <div
                        key={index}
                        className='elem flex items-center gap-8'
                    >
                        <h1
                            className='font-[SansitaBold] text-[6vh] sm:text-[8.4vh] 
                        leading-[6vh] sm:leading-[9vh]'
                        >
                            {item.text}
                        </h1>
                        <div className='imgdiv w-[5vh] h-[5vh]'>
                            <img
                                className=''
                                src={item.image}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

Row.propTypes = {
    translateClass: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired
};

export default Row
