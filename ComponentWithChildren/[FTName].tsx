import React from 'react'

import st from './<FTName | lowercasefirstchar>.module.scss';

type [FTName]Props = {
    children: React.ReactNode        
}
const [FTName] : React.FC<[FTName]Props> = ({children}) => {
   
return (
    <div className={st.container}>
        {children}
    </div>
)
}
export default [FTName]