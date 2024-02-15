import Link from "next/link";

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            {linkHref && linkTitle ?
            <Link 
            href={linkHref} 
            className="p-4 underline hover:text-color-accent text-white transition-all font-bold md:text-xl text-sm">{linkTitle}</Link>
            : null
        }
        </div>
    );
}

export default Header;