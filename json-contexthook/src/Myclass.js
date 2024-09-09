import React, { Component } from 'react'

export default class Myclass extends Component {

    colors = [
        "Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White",
        "Gray", "Cyan", "Magenta", "Lime", "Maroon", "Navy", "Olive", "Teal", "Turquoise", "Silver",
        "Gold", "Beige", "Coral", "Crimson", "Fuchsia", "Indigo", "Ivory", "Khaki", "Lavender", "Lilac",
        "Mint", "Mustard", "Peach", "Periwinkle", "Plum", "Rose", "Ruby", "Salmon", "Sapphire", "Scarlet",
        "Tan", "Violet", "Amber", "Aqua", "Azure", "Chartreuse", "Copper", "Emerald", "Jade", "Mauve"
    ];
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('component did mount', this.state.count);


    }

    increement() {
        this.setState({ count: this.state.count + 1 })
    }

    // shouldComponentUpdate(nextProps, nextState) {

    //     if (nextState.count > 5) {
    //         return false
    //     } else {
    //         return true
    //     }

    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log(prevState);

    // }


    // static getDerivedStateFromProps(props, state) {
    //     return { count: props.name }

    // }

    componentDidUpdate() {
        console.log(this.colors);
        document.body.style.backgroundColor = this.colors[this.state.count]

    }

    componentWillUnmount() {
        console.log('unmount');

    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={() => {
                    this.increement()
                }}>Increemet</button>
            </>
        )
    }
}
