
export const myAction = (data) => {
    return {
        type: "ADD",
        payload: data
    }
}


export const deleteAction = (index) => {
    return {
        type: "DELETE",
        payload: index
    }
}


export const editAction = (index, update) => {
    return {
        type: "EDIT",
        payload: { index, update }
    }
}
