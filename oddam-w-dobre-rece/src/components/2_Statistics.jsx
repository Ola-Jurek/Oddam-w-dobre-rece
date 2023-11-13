import React from 'react';
import '../scss/statistics.scss';


export const Statistics = () => {
    return (
        <div className="statistics">
            {/*<img src="../assets/3 Columns Background.png"/>*/}
            <div className="column">
                <p className="statistic_number"> 10 </p>
                <p className="statistic_info"> oddanych worków </p>
                <p className="statistic_description"> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
            </div>
            <div className="column">
                <p className="statistic_number"> 5 </p>
                <p className="statistic_info"> wspartych organizacji </p>
                <p className="statistic_description"> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
            </div>
            <div className="column">
                <p className="statistic_number"> 7 </p>
                <p className="statistic_info"> zorganizowanych zbiórek </p>
                <p className="statistic_description"> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
            </div>

        </div>
    );
}
