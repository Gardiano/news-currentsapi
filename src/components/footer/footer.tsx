import { fromNews, getInTouch } from '../../constants/footer/footer';
import { NavigationLink } from '../navigation/navigationLink';
import { Separator } from '../ui/separator';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full h-full flex flex-row justify-center bg-zinc-900 text-slate-100">
      <div className="w-full max-w-[1144px] h-auto mx-auto py-4 flex flex-col p-4">
        <h1 className='font-times'>NEWS</h1>

        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-4 
          text-xs text-slate-200 font-thin py-4">
          <div className="flex flex-col items-start justify-start gap-4 lg:flex-row">
            <div className="w-full flex flex-wrap items-center">
              <Separator orientation='horizontal' className='border-1 bg-slate-400' />
              <h1 className='h-fit font-times py-2 text-lg'>Get in touch</h1>
              <Separator orientation='horizontal' className='border-1 bg-slate-400' />
              <div className="w-1/2 h-auto flex items-start flex-col gap-4 py-4">
                {getInTouch.slice(0, 6).map(link => (
                  <NavigationLink key={link} url='/'>
                    {link}
                  </NavigationLink>
                ))}
              </div>
              <div className="w-1/2 h-auto flex flex-col items-start gap-4 py-4">
                {getInTouch.slice(6, 11).map(link => (
                  <NavigationLink key={link} url='/'>
                    {link}
                  </NavigationLink>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-4 lg:flex-row">
            <div className="w-full flex flex-wrap justify-between">
            <Separator orientation='horizontal' className='border-1 bg-slate-400' />
              <h1 className='font-times py-2 text-lg'>More from news</h1>
              <Separator orientation='horizontal' className='border-1 bg-slate-400' />
              <div className="w-1/2 h-full flex flex-col gap-4 py-4">
                {fromNews.slice(0, 6).map(link => (
                  <NavigationLink key={link} url='/'>
                    {link}
                  </NavigationLink>
                ))}
              </div>
              <div className="w-1/2 h-full flex flex-col gap-4 py-4">
                {fromNews.slice(6, 12).map(link => (
                  <NavigationLink key={link} url='/'>
                    {link}
                  </NavigationLink>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Separator orientation='horizontal' className='border-1 bg-slate-400' />
        <span className='w-full h-fit flex justify-center  text-xs gap-1 py-4 font-thin'> © News <b> {currentYear} </b> </span>
        <Separator orientation='horizontal' className='border-1 bg-slate-400' />
      </div>
      
    </footer>
  )
}
