const Part = (props) => {
    return (
        <p>
            {props.part} {props.exerciseNumber}
        </p>
    )
}

export const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} exerciseNumber={props.exercises1}/>
            <Part part={props.part2} exerciseNumber={props.exercises2}/>
            <Part part={props.part3} exerciseNumber={props.exercises3}/>
        </div>
    )
}


