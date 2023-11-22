
import './Home.css';






function Contato() {

        
    
  return (
    <div>
        <div className='titulo'>
          <h1>Contato</h1>
        </div>
        <div className='corpo'>
           
           
           <table>
               <thead>
                    <tr>
                        <th>Responsaveis</th>
                        <th>Contact</th>
                        <th>Função</th>
                        <th>Disponibilidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Paulo</td>
                        <td>9999-9999</td>
                        <td>ADM</td>
                        <td>9:00h - 12:00h</td>  
                    </tr>  
                    <tr>
                        <td>Ranilson</td>
                        <td>8888-8888</td>
                        <td>ADM</td>
                        <td>13:00h - 17:00h</td>  
                    </tr>
                    <tr>
                        <td>Bruce</td>
                        <td>7777-7777</td>
                        <td>ADM</td>
                        <td>18:00h - 00:00h</td>  
                    </tr>
             
                </tbody>
            </table> 
        </div>
    </div>
  )
}

export default Contato