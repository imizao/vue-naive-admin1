import { useUserStore } from '@/store/modules/user'



export const integrationTable = (data, returndata) => {
    
    let table = []
    data.data.forEach(item => {
        let obj = {
            baseNameFrontEnd: item.name,
            compBusinessSegments: item.name
        }
        for (let key in returndata) {
            if (key == item.value) {
                let returnObj = {
                    ...returndata[key],
                    parentNameFrontEnd: key
                }
                let isSaveStatus = false
                if (returndata.draftDto && returndata.draftDto[key]) {
                    data.columns.forEach(i => {
                        if (returndata.draftDto[key][i.key]) {
                            isSaveStatus = true;
                            returnObj[i.key] = returndata.draftDto[key][i.key]
                            returnObj[`${i.key}Status`] = true
                            if (!returnObj['editKeys']) {
                                returnObj['editKeys'] = ''
                            }
                            returnObj['editKeys'] = checkKeysDuplicate(returnObj['editKeys'],i.key)
                                ? returnObj['editKeys']
                                : returnObj['editKeys']
                                    ? `${returnObj['editKeys']},${i.key}`
                                    : i.key

                        }
                    })
                }
                obj = {
                    ...obj,
                    ...returnObj,
                }
                if (isSaveStatus) {
                    let userStore = useUserStore()
                    let aObj = {}
                    aObj[`${obj['parentNameFrontEnd']}`] = obj
                    userStore.setHomeEditDataObj(aObj)
                }
                table.push(obj)
            }
        }
    });
    return table;

}

export const checkKeysDuplicate = (str,key) => {
    let status = false
    if (!str) return status
    let arr = str.split(',')
    arr.forEach(item => {
        if(item == key) {
            status = true
        }
    })
    return status

}

export const decouplingTable = (data, statedata) => {
    let obj = {}
    data.data.forEach(item => {
        statedata.forEach(i => {
            if (i.baseNameFrontEnd == item.name) {
                obj[item.value] = { ...i }
            }
        })
    })
    return obj;
}