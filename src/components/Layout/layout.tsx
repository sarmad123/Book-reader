import './layout.css';
import {ReactNode} from "react";
interface LayoutProps {
    children?: ReactNode;
    showBoarderDiv: boolean;
}

const Layout : React.FC<LayoutProps> = ({ children, showBoarderDiv }) => {
    return (
        <main className="flex flex-col items-center">
            <div
                className="relative min-h-screen sm:my-1 w-full xl:max-w-3xl bg-white shadow-2xl border border-gray-300">
                <div
                    className="absolute top-0 left-0 w-1/3 h-48 bg-[radial-gradient(circle,_rgba(203,213,224,0.2)_2px,_transparent_5px)] bg-[length:12px_12px] mask-gradient-top-left"></div>

                <div
                    className="absolute bottom-0 right-0 w-1/3 h-48 bg-[radial-gradient(circle,_rgba(203,213,224,0.2)_2px,_transparent_5px)] bg-[length:12px_12px] mask-gradient-top-right"></div>

                <div
                    className={`relative ${showBoarderDiv ? 'mt-20' : 'mt-10 '}`}>
                    <article className="prose prose-lg mx-auto ">
                        {children}
                    </article>
                </div>
                {showBoarderDiv && (<div className="absolute top-0 right-0 h-full w-12 flex flex-col">
                    <div className="flex-1" style={{background:'#c8dbfb'}}></div>
                    <div className="flex-1 " style={{background:'#005ee6'}}></div>
                    <div className="flex-1" style={{background:'#002451'}}></div>
                </div>)}
            </div>

        </main>
    );
};

export default Layout;
