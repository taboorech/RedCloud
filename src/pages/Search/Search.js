import "./Search.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import SongExpansive from "../../components/SongExpansive/SongExpansive";
import UsersBlock from "../../components/UsersBlock/UsersBlock";
import { useSelector } from "react-redux";
import { useFetchDataByRequestMutation } from "../../redux";
import { useEffect, useState } from "react";
import mainInstance from "../../api/mainInstance";
import PlaylistExpansive from "../../components/PlaylistExpansive/PlaylistExpansive";
import List from "../../components/List/List";

function Search({ audio }) {

  const { filters, activeFilter } = useSelector((state) => state.searchFilter);
  const [ sendRequest, sendRequestResult ] = useFetchDataByRequestMutation();
  const [ users, setUsers ] = useState([]);
  const [ playlists, setPlaylists ] = useState([]);
  const [ songs, setSongs ] = useState([]);

  const generateContent = () => {
    switch(filters[activeFilter]) {
      case "Podcasts":
      case "Playlists":
        return (
          <List className={"playlist-songs playlists full scroll"} emptyText={!sendRequestResult.data && "Send search request"}>
            { playlists.map(playlist => (
              <PlaylistExpansive 
                key={playlist._id} 
                title={playlist.title} 
                secondaryInfo={playlist.owners[0].login} 
                duration={playlist.duration} 
                imageSrc={mainInstance.defaults.baseURL + playlist.imageUrl} 
              />
              )) }
          </List>
        )
      case "Songs":
        return (
          <>
            <List className={"playlist-songs full scroll"} emptyText={!sendRequestResult.data && "Send search request"}>
              { songs.map(song => (
                <SongExpansive 
                  key={song._id} 
                  title={song.title} 
                  secondaryInfo={song.album} 
                  duration={song.duration} 
                  songId={song._id} 
                  songUrl={mainInstance.defaults.baseURL + song.songUrl} 
                  imageSrc={mainInstance.defaults.baseURL + song.imageUrl} 
                  audio={audio} 
                />
              )) }
            </List>
          </>
        )
      case "Authors":
        return (
          <UsersBlock className={"authors-block full"} users={users.filter(user => !!user.songs.length)} emptyText={!sendRequestResult.data && "Send search request"}/>
        )
      case "Profile":
        return (
          <UsersBlock className={"authors-block full"} users={users} emptyText={!sendRequestResult.data && "Send search request"}/>
        )
      case "All":
      default:
        return (
          <>
            <UsersBlock className={"authors-block small"} users={users} emptyText={!sendRequestResult.data && "Send search request"}/>
            <List className={"playlist-songs scroll"} emptyText={!sendRequestResult.data && "Send search request"}>
              { songs.map(song => (
                <SongExpansive 
                  key={song._id} 
                  title={song.title} 
                  secondaryInfo={song.album} 
                  duration={song.duration} 
                  songId={song._id} 
                  songUrl={mainInstance.defaults.baseURL + song.songUrl} 
                  imageSrc={mainInstance.defaults.baseURL + song.imageUrl} 
                  audio={audio} 
                />
              )) }
              { playlists.map(playlist => (
                <PlaylistExpansive 
                  key={playlist._id} 
                  title={playlist.title} 
                  secondaryInfo={playlist.owners[0].login} 
                  duration={playlist.duration} 
                  imageSrc={mainInstance.defaults.baseURL + playlist.imageUrl} 
                />
                )) }
            </List>
          </>
        )
    }
  };

  useEffect(() => {
    if(!sendRequestResult.isSuccess) {
      return;
    }
    setUsers(sendRequestResult.data.users);
    setSongs(sendRequestResult.data.songs);

    sendRequestResult.data.users.map(user =>
      user.songs.map(song => setSongs(prev => !prev.find(value => value._id === song._id) ? [...prev, song] : prev))
    );
    sendRequestResult.data.songs.map(song => 
      song.authors.map(author => setUsers(prev => !prev.find(value => value._id === author._id) ? [...prev, author] : prev))
    );
    setPlaylists(sendRequestResult.data.playlists);
  }, [sendRequestResult]);

  return (
    <div className="Search">
      <DefaultPageContainer audio={audio}>
        <SearchBar sendRequest={sendRequest}/>
        <SearchFilters className={"search-filters-block"} />
        { generateContent() }
      </DefaultPageContainer>
    </div>
  )
}

export default Search;