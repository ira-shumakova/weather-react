import Icons from '../assets/icons/index';

const iconLink = (iconId: string) => {
    const regex = new RegExp(iconId)
    return Icons.find(icon => regex.test(icon))
}

export default iconLink;