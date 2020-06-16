import React, { useEffect, useState } from 'react';
import INSSandIRPFValues from './components/INSSandIRPFValues';
import { calculateSalaryFrom } from './calcs/salary';
import './styles/styles.css';

const App = () => {
    const [ baseSalary, setBaseSalary ] = useState(0);
    const [ calculatedValues, setCalculatedValues ] = useState(calculateSalaryFrom(0));
    
    useEffect(() => {
        setCalculatedValues(calculateSalaryFrom(baseSalary));
    }, [baseSalary]);

    return (
        <div className="container">
            <div class="row">
                <div class="col s12">
                    <h1 className="center-align">React Salário</h1>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="salario_bruto" type="text" class="validate" value={baseSalary} onChange={(event) => setBaseSalary(event.target.value)} />
                    <label class="active" for="salario_bruto">Salário Bruto</label>
                </div>
            </div>

            <INSSandIRPFValues calculatedValues={calculatedValues} />

            <div class="row">
                <div class="col s3">
                    <input id="salario_liquido" type="text" class="validate" />
                    <label class="active" for="salario_liquido">Salário líquido</label>
                </div>
                <div class="col s8">
                </div>
            </div>
            <div class="row">
                <div class="col s12 sal-bar sal-liquido">
                </div>
            </div>
        </div>
    );
}

export default App;
