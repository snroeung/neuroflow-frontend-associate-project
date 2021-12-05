import './App.css';
import {Table} from 'react-bootstrap';
import { mockFetchHelper } from "./mock_api";
import albums from './albums.json'
import { format } from 'date-fns';

function App() {
  //sort data in descending order based on last played 
  const data = albums.albums.sort((a,b) => parseInt(b.last_listened) - parseInt(a.last_listened));

  return (
    <div className="App">
      <Table bordered>
        <thead>
          <tr>
            <th>Band</th>
            <th>Album</th>
            <th>Genres</th>
            <th>Last Played</th>
            <th>Date Released</th>
          </tr>
          <>
              { mockFetchHelper(albums) &&
                  data.map((item, key) => {
                      return (
                          <tr key={key}>
                              <td>{item.band_name}</td>
                              <td>{item.album_title}</td>
                              <td>{item.genres.join(', ')}</td>
                              <td>{format(new Date(item.last_listened), 'MM/dd/yyyy hh:mm aaaa')}</td>
                              <td>{format(new Date(item.release_date),'MM/dd/yyyy')}</td>
                          </tr>
                      );
                  })
                }        
          </>  
        </thead>
      </Table> 

    </div>
  );
}

export default App;
