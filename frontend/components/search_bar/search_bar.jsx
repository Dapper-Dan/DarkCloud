import React from 'react';
import { NavLink } from 'react-router-dom';



export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: "",
            loading: true,
            filteredOptions: [],
            activeOption: 0,
            showOptions: false,
           


        }
        this.props.fetchUsers()
        this.props.getBunchSongs()
        
        this.searchUpdate = this.searchUpdate.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.songs === undefined) {
            return false
        } else {
            return true
        }
    }


    componentDidMount() {
        this.setState( {loading: false})
      
    }

    // componentWillUnmount() {

    // }


     searchUpdate(e) {
        const searchInput = e.currentTarget.value
        let songs = Object.values(this.props.songs);
        let users = Object.values(this.props.users);
    
        const filteredOptions = songs.filter(
            songItem => {
                let songName = songItem.title.toLowerCase()
                return songName.indexOf(searchInput.toLowerCase()) > -1
            }).concat(users.filter(
                userItem => {
                let userName = userItem.display_name.toLowerCase()
                return userName.indexOf(searchInput.toLowerCase()) > -1
                }
            )
        );

       this.setState({
           searchInput,
           filteredOptions,
           showOptions: true
       })
    }

    onClick(e) {
        this.setState({
          showOptions: false,
          searchInput: e.currentTarget.innerText
        });
    };

    onKeyDown(e) {
        const { activeOption, filteredOptions } = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeOption: 0,
                showOptions: false,
                searchInput: filteredOptions[activeOption]
            });
        } else if (e.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }
            this.setState({ activeOption: activeOption - 1 });
        } else if (e.keyCode === 40) {
            if (activeOption - 1 === filteredOptions.length) {
                return;
            }
            this.setState({ activeOption: activeOption + 1 });
        } 
    }


    render() {
        console.log(this.state)
        
        if (this.state.loading) {
            return (<p>loading...</p>)
        } else {

            let optionList;

            if (this.state.showOptions && this.state.searchInput && this.state.filteredOptions.length) {
                    console.log('working')
                    optionList = (
                        <ul className="options">
                            {this.state.filteredOptions.map((optionName, index) => {
                            if (optionName.title) {
                                optionName = optionName.title
                            } else {
                                optionName = optionName.display_name
                            }
                            let className;
                            if (index === this.state.activeOption) {
                                console.log('made it')
                                className = 'option-active';
                            }
                            return (
                                <li className={className} key={optionName} onClick={this.onClick}>
                                {optionName}
                                </li>
                            );
                            })}
                        </ul>
                    )
            } else {
                console.log('notworking')
            }











            return (
                <>
                <input className="searchBar" placeholder="  Search for music or podcasts" type="text" value={this.state.searchInput} onChange={this.searchUpdate} />
                <input type="submit" className="search-button" />
                {optionList}
                
                </>
            )
        }
    }

}
