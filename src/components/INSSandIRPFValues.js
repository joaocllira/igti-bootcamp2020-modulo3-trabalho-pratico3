import React from 'react';

const INSSandIRPFValues = ({calculatedValues}) => {
    return (
        <div class="row">
            <div class="input-field col s3">
                <input id="base_inss" type="text" class="validate" value={calculatedValues.baseINSS} />
                <label class="active" for="base_inss">Base INSS</label>
            </div>
            <div class="input-field col s3">
                <input id="desconto_inss" type="text" class="validate" value={calculatedValues.discountINSS} />
                <label class="active" for="desconto_inss">Desconto INSS</label>
            </div>
            <div class="input-field col s3">
                <input id="base_irpf" type="text" class="validate" value={calculatedValues.baseIRPF} />
                <label class="active" for="base_irpf">Base IRPF</label>
            </div>
            <div class="input-field col s3">
                <input id="desconto_irpf" type="text" class="validate" value={calculatedValues.discountIRPF} />
                <label class="active" for="desconto_irpf">Desconto IRPF</label>
            </div>
        </div>
    );
}

export default INSSandIRPFValues;