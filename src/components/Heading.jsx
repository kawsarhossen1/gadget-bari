import PropTypes from 'prop-types';

const Heading = ({title, subtitle}) => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-white font-bold text-3xl text-center '>{title}</h1>
            <p className='text[16px] font-normal text-[#FFFFFF]'>{subtitle}</p>
        </div>
    );
};


Heading.propTypes ={
    title: PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired,
}

export default Heading;