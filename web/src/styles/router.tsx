import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "../pages/Landing"
import ServiceMaps from "../pages/ServiceMaps";
import CreateService from "../pages/CreateService";
import Service from "../pages/Service";


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={ServiceMaps} />
                <Route path="/services/create" component={CreateService} />
                <Route path="/services/:id" component={Service} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
