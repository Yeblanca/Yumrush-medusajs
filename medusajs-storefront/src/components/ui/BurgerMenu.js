import Image from 'next/image'

const BurgerMenu = ({ setActive, active}) => {
    return (
    <div
    className='block md:hidden cursor-pointer z-50'
    data-drawer-target='drawer-example'
    data-drawer-show='drawer-example'
    aria-controls='drawer-example'
    onClick={() => setActive(!active)}
    >
        <Image 
        src='/menu-icon.svg' 
        alt='menu-icon' 
        width={22} 
        height={15} 
        />
    </div>
    )
}

export default BurgerMenu