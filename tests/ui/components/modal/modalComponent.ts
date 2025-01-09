import { BaseComponent, IBaseComponent } from "../baseComponent";
import {ModalFooterComponent} from "./modalFooter";
/**
 * Modal
 */

export class ModalComponent extends BaseComponent {
    public footer: ModalFooterComponent;
    constructor(dataProps: IBaseComponent) {
        super(dataProps);
        this.footer=new ModalFooterComponent({page:dataProps.page,selector:"//*[@class='modal-footer']"});
    }
}
