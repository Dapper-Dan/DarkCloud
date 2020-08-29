import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';



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
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.songs === undefined) {
            return false
        } else {
            return true
        }
    }


    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
        
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

    
//   componentDidMount() {
//     document.addEventListener('click', this.handleClickOutside, true);
// }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside(event) {
        const domNode = ReactDOM.findDOMNode(this);
        
        if (!domNode || !domNode.contains(event.target)) {
            console.log('hello')
            this.setState({ showOptions: false })
        }
    }

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

    onMouseOver(e) {
        const { activeOption, filteredOptions } = this.state; 
        console.log(e.currentTarget.innerText)
        
        for(let i = 0; i < filteredOptions.length; i++) {
            if (Object.values(filteredOptions[i]).includes(e.currentTarget.innerText)) {
                this.setState({
                    activeOption: i
                })
            }
        }
    }


    render() {
        console.log(this.state)
        
        if (this.state.loading) {
            return (<p>loading...</p>)
        } else {

            let optionList;

            if (this.state.showOptions && this.state.searchInput && this.state.filteredOptions.length) {
                    
                    optionList = (
                        <div className="options-drop">
                        <ul className="options">
                            {this.state.filteredOptions.map((optionName, index) => {
                            if (optionName.title) {
                                optionName = optionName.title
                            } else {
                                optionName = optionName.display_name
                            }
                            let className;
                            if (index === this.state.activeOption) {
                                
                                className = 'option-active';
                            }
                            return (
                                <li className={className} key={optionName} onClick={this.onClick} onMouseOver={this.onMouseOver}>
                                {optionName}
                                </li>
                            );
                            })}
                        </ul>
                        </div>
                    )
            }











            return (
                <>
                <input className="searchBar" placeholder="  Search for music or podcasts" type="text" value={this.state.searchInput} onChange={this.searchUpdate} onKeyDown={this.onKeyDown} onMouseOver={this.onMouseOver}/>
                <input type="submit" className="search-button" />
                {optionList}
                
                </>
            )
        }
    }

}
