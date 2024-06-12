import "./Search.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import SongExpansive from "../../components/SongExpansive/SongExpansive";
import AuthorsBlock from "../../components/AuthorsBlock/AuthorsBlock";
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
  // const [ users, setUsers ] = useState([]);
  const [ playlists, setPlaylists ] = useState([]);
  const [ songs, setSongs ] = useState([]);

  const generateContent = () => {
    switch(filters[activeFilter]) {
      case "Podcasts":
      case "Playlists":
        return (
          <List className={"playlist-songs full scroll"}>
            { playlists.map(playlist => (
              <PlaylistExpansive 
                key={playlist._id} 
                title={playlist.title} 
                secondaryInfo={playlist.owners[0]} 
                duration={playlist.duration} 
                imageSrc={mainInstance.defaults.baseURL + playlist.imageUrl} 
              />
            )) }
          </List>
        )
      case "Songs":
        return (
          <>
            <List className={"playlist-songs full scroll"}>
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
      // TODO: Change AuthorsBlock to Users Block
      // TODO: Need to split author and default users
      case "Authors":
      case "Profile":
        return (
          <AuthorsBlock className={"authors-block full"} authors={users}/>
        )
      case "All":
      default:
        return (
          <>
            <AuthorsBlock className={"authors-block small"} authors={users}/>
            <List className={"playlist-songs scroll"}>
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
    }
  };

  useEffect(() => {
    if(!sendRequestResult.isSuccess) {
      return;
    }
    setUsers(sendRequestResult.data.users);
    setSongs(sendRequestResult.data.songs);
    sendRequestResult.data.users.map(user =>
      user.songs.map(song => setSongs(prev => [...prev, song]))
    );
    sendRequestResult.data.songs.map(song => 
      song.authors.map(author => setUsers(prev => [...prev, author]))
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