import { Dicio } from '@dicio/pivot-react';

export const DicioComponent = () => {
    return (
        <Dicio
            auth={{
                id: "ea9bda68-aad0-4695-a60d-4630fc7dd717",
                key: "v58hR5kiAbGhwdKg8zJ2UeF3hpfwJMA9"
            }}
            text="Iniciar proceso"
            variant="only_logo"
            debug={true}
            mode="dev"
            status={(evento) => { console.log("evento", evento); }}
            errors={(error => { console.log("error", error); })}
            finish={(data) => { console.log("data", data); }}>
        </Dicio>
    );
};
