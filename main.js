import embed from 'vega-embed';
import './style.css';
import { spec } from "./spec";
import { Renderer } from 'vega';

embed ("#app", spec, {Renderer : "svg"});

