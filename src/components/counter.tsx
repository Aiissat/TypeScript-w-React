import React, { Component } from 'react';

// Définir le type pour l'état
interface CounterState {
    count: number;
}

// Le composant Counter avec des types pour les props et l'état
class Counter extends Component<{}, CounterState> {
    // Initialiser l'état
    state: CounterState = {
        count: 0,
    };

    // Méthode pour incrémenter le compteur
    increment = (): void => { 
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
