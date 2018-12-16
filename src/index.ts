import { Monitor, FunctionGeneratorLead, RealTimeKeeper, CanvasRenderContext } from 'ekg-monitor';
import './style.css';

const gridRenderContext = new CanvasRenderContext(
    document.querySelector<HTMLCanvasElement>('#grid')!.getContext('2d')!
);
const leadRenderContext = new CanvasRenderContext(
    document.querySelector<HTMLCanvasElement>('#lead')!.getContext('2d')!
);
const timeKeeper = new RealTimeKeeper(Date.now);
const lead = new FunctionGeneratorLead(Math.sin, Math.PI / 1000, timeKeeper);
const monitor = new Monitor(lead, timeKeeper, gridRenderContext, leadRenderContext, {
    width: 600,
    height: 300
});

monitor.turnOn();

setInterval(() => monitor.tick(), 10);
