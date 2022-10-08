import nft0 from '../assets/images/nft/0.png'
import nft1 from '../assets/images/nft/1.png'
import nft2 from '../assets/images/nft/2.png'
import nft3 from '../assets/images/nft/3.png'
import nft4 from '../assets/images/nft/4.png'
import nft5 from '../assets/images/nft/5.png'

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '640px',
    tabletM: '768px',
    laptopS: '1024px',
    laptopM: '1280px',
    laptopL: '1440px',
    desktop: '2560px',
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tabletS: `(min-width: ${size.tabletS})`,
    tabletM: `(min-width: ${size.tabletM})`,
    laptopS: `(min-width: ${size.laptopS})`,
    laptopM: `(min-width: ${size.laptopM})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
}

export const getNFTImage = (nftCollectionId: number): typeof nft0 => {
    switch (nftCollectionId) {
        case 0: {
            return nft0
        }
        case 1: {
            return nft1
        }
        case 2: {
            return nft2
        }
        case 3: {
            return nft3
        }
        case 4: {
            return nft4
        }
        case 5: {
            return nft5
        }
    }
}
