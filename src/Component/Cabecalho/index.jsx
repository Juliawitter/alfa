import BOCAWEB from './img/logobocaweb.png';

export const Cabecalho= () =>{
    return (
        <div className='Cabecalho'>
          <a href='http://www.bocaweb.com.br/' target='blank' ><img src={BOCAWEB} alt= 'Logo do projeto bocaweb' className='logo'/></a>
          <div>
            <h1>BocaWeb-Front</h1>
            <h2>O seu portal de audiodescrição</h2>
          </div>
        </div>
    )
}
