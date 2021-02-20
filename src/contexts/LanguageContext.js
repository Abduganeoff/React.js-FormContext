import React, {Component, createContext} from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.setState = { language: 'french' }
    }

    render() {
        return(
            <LanguageContext.Provider value={{...this.state}}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}