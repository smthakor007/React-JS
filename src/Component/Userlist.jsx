export function WithLoading(WrappendComp){
    return function Enhanced({isLoading,...rest}){
        if(isLoading){
            return <p>...Loading</p>
        }
        return <WrappendComp{...rest}/>
    }
}