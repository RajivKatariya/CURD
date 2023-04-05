import React from "react"


export function Loginmodal() {
    return (
        <div class="modal fade" id="loginpage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                    <div class="modal-body">
                        {/* login page start */}
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                    <div class="form-text"> filed required</div>
                                </div>
                                <div className="col-12">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
                                    <div class="form-text"> filed required</div>
                                   
                                </div>
                            </div>
                        </div>
                        {/* end */}
                    </div>
                    <div class="modal-footer">
                       
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cancle</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}