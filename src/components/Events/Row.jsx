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
        { text: "Помогаем людям", image: img7 },
        { text: "Понятно каждому", image: img2 },
        { text: "С теплотой и заботой", image: img3 },
        { text: "Поддержка рядом", image: img4 },
        { text: "Чуткость к каждому", image: img5 },
        { text: "Просто и ясно", image: img2 },
        { text: "Делаем добро", image: img4 },
        { text: "Внимание к деталям", image: img5 },
        { text: "Легко разобраться", image: img2 },
        { text: "С открытым сердцем", image: img6 },
        { text: "Всегда на связи", image: img1 },
        { text: "С душой", image: img6 },
        { text: "Забота — в приоритете", image: img5 },
        { text: "Доступно каждому", image: img2 },
        { text: "Важен каждый", image: img4 },
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
