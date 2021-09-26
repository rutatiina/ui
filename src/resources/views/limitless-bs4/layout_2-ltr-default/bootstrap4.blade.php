@extends('ui.limitless::layout_2-ltr-default.appVue')

@section('sidebar-left')
		<!-- Secondary sidebar -->
		<div class="sidebar sidebar-light sidebar-secondary sidebar-expand-md border-right-0">

			<!-- Sidebar mobile toggler -->
			<div class="sidebar-mobile-toggler text-center">
				<a href="#" class="sidebar-mobile-secondary-toggle">
					<i class="icon-arrow-left8"></i>
				</a>
				<span class="font-weight-semibold">Secondary sidebar</span>
				<a href="#" class="sidebar-mobile-expand">
					<i class="icon-screen-full"></i>
					<i class="icon-screen-normal"></i>
				</a>
			</div>
			<!-- /sidebar mobile toggler -->


			<!-- Sidebar content -->
			<div class="sidebar-content ">
				<div id="rg-sidebar-secondary-fixed-content-scroll" class="position-fixed h-100" style="width: 16.875rem; overflow: hidden;">
					<div>

						<!-- Sub navigation -->
						<div class="card mb-2">
							{{--
							<div class="card-header bg-transparent header-elements-inline">
								<span class="text-uppercase font-size-sm font-weight-semibold">Navigation</span>
								<div class="header-elements">
									<div class="list-icons">
										<a class="list-icons-item" data-action="collapse"></a>
									</div>
								</div>
							</div>
							--}}

							<div class="card-body p-0">
								<ul class="nav nav-sidebar" data-nav-type="accordion">
									<li class="nav-item-header">Actions</li>
									<li class="nav-item">
										<a href="#" class="nav-link"><i class="icon-googleplus5"></i> Create task</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link"><i class="icon-portfolio"></i> Create project</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link"><i class="icon-compose"></i> Edit task list</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link">
											<i class="icon-user-plus"></i>
											Assign users
											<span class="badge bg-primary badge-pill ml-auto">94 online</span>
										</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link"><i class="icon-collaboration"></i> Create team</a>
									</li>
									<li class="nav-item-header">Navigate</li>
									<li class="nav-item">
										<a href="#" class="nav-link"><i class="icon-files-empty"></i> All tasks</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link">
											<i class="icon-file-plus"></i>
											Active tasks
											<span class="badge bg-dark badge-pill ml-auto">28</span>
										</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link"><i class="icon-file-check"></i> Closed tasks</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link">
											<i class="icon-reading"></i>
											Assigned to me
											<span class="badge bg-info badge-pill ml-auto">86</span>
										</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link">
											<i class="icon-make-group"></i>
											Assigned to my team
											<span class="badge bg-danger badge-pill ml-auto">47</span>
										</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link"><i class="icon-cog3"></i> Settings</a>
									</li>
								</ul>
							</div>
						</div>
						<!-- /sub navigation -->


						<!-- Online users -->
						<div class="card">
							<div class="card-header bg-transparent header-elements-inline">
								<span class="text-uppercase font-size-sm font-weight-semibold">Online users</span>
								<div class="header-elements">
									<div class="list-icons">
										<a class="list-icons-item" data-action="collapse"></a>
									</div>
								</div>
							</div>

							<div class="card-body">
								<ul class="media-list">
									<li class="media">
										<a href="#" class="mr-3">
											<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
										</a>
										<div class="media-body">
											<a href="#" class="media-title font-weight-semibold">James Alexander</a>
											<span class="font-size-xs text-muted d-block">Santa Ana, CA.</span>
										</div>
										<div class="ml-3 align-self-center">
											<span class="badge badge-mark border-success"></span>
										</div>
									</li>

									<li class="media">
										<a href="#" class="mr-3">
											<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
										</a>
										<div class="media-body">
											<a href="#" class="media-title font-weight-semibold">Jeremy Victorino</a>
											<span class="font-size-xs text-muted d-block">Dowagiac, MI.</span>
										</div>
										<div class="ml-3 align-self-center">
											<span class="badge badge-mark border-danger"></span>
										</div>
									</li>

									<li class="media">
										<a href="#" class="mr-3">
											<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
										</a>
										<div class="media-body">
											<a href="#" class="media-title font-weight-semibold">Margo Baker</a>
											<span class="font-size-xs text-muted d-block">Kasaan, AK.</span>
										</div>
										<div class="ml-3 align-self-center">
											<span class="badge badge-mark border-success"></span>
										</div>
									</li>

									<li class="media">
										<a href="#" class="mr-3">
											<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
										</a>
										<div class="media-body">
											<a href="#" class="media-title font-weight-semibold">Beatrix Diaz</a>
											<span class="font-size-xs text-muted d-block">Neenah, WI.</span>
										</div>
										<div class="ml-3 align-self-center">
											<span class="badge badge-mark border-warning"></span>
										</div>
									</li>

									<li class="media">
										<a href="#" class="mr-3">
											<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
										</a>
										<div class="media-body">
											<a href="#" class="media-title font-weight-semibold">Richard Vango</a>
											<span class="font-size-xs text-muted d-block">Grapevine, TX.</span>
										</div>
										<div class="ml-3 align-self-center">
											<span class="badge badge-mark border-grey-400"></span>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<!-- /online-users -->


						<!-- Latest updates -->
						<div class="card">
							<div class="card-header bg-transparent header-elements-inline">
								<span class="text-uppercase font-size-sm font-weight-semibold">Latest updates</span>
								<div class="header-elements">
									<div class="list-icons">
										<a class="list-icons-item" data-action="collapse"></a>
									</div>
								</div>
							</div>

							<div class="card-body">
								<ul class="media-list">
									<li class="media">
										<div class="mr-3">
											<a href="#" class="btn bg-transparent border-primary text-primary rounded-round border-2 btn-icon">
												<i class="icon-git-pull-request"></i>
											</a>
										</div>

										<div class="media-body">
											Drop the IE <a href="#">specific hacks</a> for temporal inputs
											<div class="text-muted font-size-sm">4 minutes ago</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="#" class="btn bg-transparent border-warning text-warning rounded-round border-2 btn-icon">
												<i class="icon-git-commit"></i>
											</a>
										</div>

										<div class="media-body">
											Add full font overrides for popovers and tooltips
											<div class="text-muted font-size-sm">36 minutes ago</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="#" class="btn bg-transparent border-info text-info rounded-round border-2 btn-icon">
												<i class="icon-git-branch"></i>
											</a>
										</div>

										<div class="media-body">
											<a href="#">Chris Arney</a> created a new <span class="font-weight-semibold">Design</span> branch
											<div class="text-muted font-size-sm">2 hours ago</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="#" class="btn bg-transparent border-success text-success rounded-round border-2 btn-icon">
												<i class="icon-git-merge"></i>
											</a>
										</div>

										<div class="media-body">
											<a href="#">Eugene Kopyov</a> merged <span class="font-weight-semibold">Master</span> and <span class="font-weight-semibold">Dev</span> branches
											<div class="text-muted font-size-sm">Dec 18, 18:36</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="#" class="btn bg-transparent border-primary text-primary rounded-round border-2 btn-icon">
												<i class="icon-git-pull-request"></i>
											</a>
										</div>

										<div class="media-body">
											Have Carousel ignore keyboard events
											<div class="text-muted font-size-sm">Dec 12, 05:46</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<!-- /latest updates -->


						<!-- Filter -->
						<div class="card">
							<div class="card-header bg-transparent header-elements-inline">
								<span class="text-uppercase font-size-sm font-weight-semibold">Filter</span>
								<div class="header-elements">
									<div class="list-icons">
										<a class="list-icons-item" data-action="collapse"></a>
									</div>
								</div>
							</div>

							<div class="card-body">
								<form action="#">
									<div class="form-group">
										<div class="form-check form-check-right">
											<label class="form-check-label">
												<input type="checkbox" class="form-input-styled" checked data-fouc>
												Free People
											</label>
										</div>

										<div class="form-check form-check-right">
											<label class="form-check-label">
												<input type="checkbox" class="form-input-styled" data-fouc>
												GAP
											</label>
										</div>

										<div class="form-check form-check-right">
											<label class="form-check-label">
												<input type="checkbox" class="form-input-styled" checked data-fouc>
												Lane Bryant
											</label>
										</div>

										<div class="form-check form-check-right">
											<label class="form-check-label">
												<input type="checkbox" class="form-input-styled" checked data-fouc>
												Ralph Lauren
											</label>
										</div>

										<div class="form-check form-check-right">
											<label class="form-check-label">
												<input type="checkbox" class="form-input-styled" data-fouc>
												Liz Claiborne
											</label>
										</div>
									</div>
								</form>
							</div>
						</div>
						<!-- /filter -->


						<!-- Contacts -->
						<div class="card">
							<div class="card-header bg-transparent header-elements-inline">
								<span class="text-uppercase font-size-sm font-weight-semibold">Contacts</span>
								<div class="header-elements">
									<div class="list-icons">
										<a class="list-icons-item" data-action="collapse"></a>
									</div>
								</div>
							</div>

							<div class="card-body">
								<ul class="media-list">
									<li class="media">
										<a href="#" class="mr-3 position-relative">
											<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
											<span class="badge badge-info badge-pill badge-float">6</span>
										</a>

										<div class="media-body align-self-center">
											Rebecca Jameson
										</div>

										<div class="ml-3 align-self-center">
											<div class="dropdown">
												<a href="#" class="text-default dropdown-toggle caret-0" data-toggle="dropdown"><i class="icon-more2"></i></a>
												<div class="dropdown-menu dropdown-menu-right">
													<a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Start chat</a>
													<a href="#" class="dropdown-item"><i class="icon-phone2"></i> Make a call</a>
													<a href="#" class="dropdown-item"><i class="icon-mail5"></i> Send mail</a>
													<div class="dropdown-divider"></div>
													<a href="#" class="dropdown-item"><i class="icon-statistics"></i> Statistics</a>
												</div>
											</div>
										</div>
									</li>

									<li class="media">
										<a href="#" class="mr-3 position-relative">
											<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
											<span class="badge badge-info badge-pill badge-float">9</span>
										</a>

										<div class="media-body align-self-center">
											Walter Sommers
										</div>

										<div class="ml-3 align-self-center">
											<div class="dropdown">
												<a href="#" class="text-default dropdown-toggle caret-0" data-toggle="dropdown"><i class="icon-more2"></i></a>
												<div class="dropdown-menu dropdown-menu-right">
													<a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Start chat</a>
													<a href="#" class="dropdown-item"><i class="icon-phone2"></i> Make a call</a>
													<a href="#" class="dropdown-item"><i class="icon-mail5"></i> Send mail</a>
													<div class="dropdown-divider"></div>
													<a href="#" class="dropdown-item"><i class="icon-statistics"></i> Statistics</a>
												</div>
											</div>
										</div>
									</li>

									<li class="media">
										<a href="#" class="mr-3">
											<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
										</a>

										<div class="media-body align-self-center">
											Otto Gerwald
										</div>

										<div class="ml-3 align-self-center">
											<div class="dropdown">
												<a href="#" class="text-default dropdown-toggle caret-0" data-toggle="dropdown"><i class="icon-more2"></i></a>
												<div class="dropdown-menu dropdown-menu-right">
													<a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Start chat</a>
													<a href="#" class="dropdown-item"><i class="icon-phone2"></i> Make a call</a>
													<a href="#" class="dropdown-item"><i class="icon-mail5"></i> Send mail</a>
													<div class="dropdown-divider"></div>
													<a href="#" class="dropdown-item"><i class="icon-statistics"></i> Statistics</a>
												</div>
											</div>
										</div>
									</li>

									<li class="media">
										<a href="#" class="mr-3">
											<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
										</a>

										<div class="media-body align-self-center">
											Vince Satmann
										</div>

										<div class="ml-3 align-self-center">
											<div class="dropdown">
												<a href="#" class="text-default dropdown-toggle caret-0" data-toggle="dropdown"><i class="icon-more2"></i></a>
												<div class="dropdown-menu dropdown-menu-right">
													<a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Start chat</a>
													<a href="#" class="dropdown-item"><i class="icon-phone2"></i> Make a call</a>
													<a href="#" class="dropdown-item"><i class="icon-mail5"></i> Send mail</a>
													<div class="dropdown-divider"></div>
													<a href="#" class="dropdown-item"><i class="icon-statistics"></i> Statistics</a>
												</div>
											</div>
										</div>
									</li>

									<li class="media">
										<a href="#" class="mr-3">
											<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
										</a>

										<div class="media-body align-self-center">
											Jason Leroy
										</div>

										<div class="ml-3 align-self-center">
											<div class="dropdown">
												<a href="#" class="text-default dropdown-toggle caret-0" data-toggle="dropdown"><i class="icon-more2"></i></a>
												<div class="dropdown-menu dropdown-menu-right">
													<a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Start chat</a>
													<a href="#" class="dropdown-item"><i class="icon-phone2"></i> Make a call</a>
													<a href="#" class="dropdown-item"><i class="icon-mail5"></i> Send mail</a>
													<div class="dropdown-divider"></div>
													<a href="#" class="dropdown-item"><i class="icon-statistics"></i> Statistics</a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<!-- /contacts -->

					</div>
				</div>

			</div>
			<!-- /sidebar content -->

		</div>
		<!-- /secondary sidebar -->
@endsection

@section('content')
		<!-- Main content -->
		<div class="content-wrapper">

			<!-- Page header -->
			<div class="page-header">
				<div class="page-header-content header-elements-md-inline">
					<div class="page-title d-flex">
						<h4><i class="icon-arrow-left52 mr-2"></i> <span class="font-weight-semibold">Starters</span> - Fixed Layout</h4>
						<a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
					</div>

					<div class="header-elements d-none text-center text-md-left mb-3 mb-md-0">
						<a href="#" class="btn btn-labeled btn-labeled-right bg-primary">Button <b><i class="icon-menu7"></i></b></a>
					</div>
				</div>
			</div>
			<!-- /page header -->


			<!-- Content area -->
			<div class="content pt-0">

				<!-- Basic card -->
				<div class="card">
					<div class="card-header header-elements-inline">
						<h5 class="card-title">Basic card</h5>
						<div class="header-elements">
							<div class="list-icons">
		                		<a class="list-icons-item" data-action="collapse"></a>
		                		<a class="list-icons-item" data-action="reload"></a>
		                		<a class="list-icons-item" data-action="remove"></a>
		                	</div>
	                	</div>
					</div>

					<div class="card-body">
						<h6 class="font-weight-semibold">Start your development with no hassle!</h6>
						<p class="mb-3">Common problem of templates is that all code is deeply integrated into the core. This limits your freedom in decreasing amount of code, i.e. it becomes pretty difficult to remove unnecessary code from the project. Limitless allows you to remove unnecessary and extra code easily just by removing the path to specific LESS file with component styling. All plugins and their options are also in separate files. Use only components you actually need!</p>

						<h6 class="font-weight-semibold">What is this?</h6>
						<p class="mb-3">Starter kit is a set of pages, useful for developers to start development process from scratch. Each layout includes base components only: layout, page kits, color system which is still optional, bootstrap files and bootstrap overrides. No extra CSS/JS files and markup. CSS files are compiled without any plugins or components. Starter kit was moved to a separate folder for better accessibility.</p>

						<h6 class="font-weight-semibold">How does it work?</h6>
						<p>You open one of the starter pages, add necessary plugins, uncomment paths to files in components.less file, compile new CSS. That's it. I'd also recommend to open one of main pages with functionality you need and copy all paths/JS code from there to your new page, it's just faster and easier.</p>
					</div>
				</div>
				<!-- /basic card -->


				<!-- Basic table -->
				<div class="card">
					<div class="card-header header-elements-inline">
						<h5 class="card-title">Basic table</h5>
						<div class="header-elements">
							<div class="list-icons">
		                		<a class="list-icons-item" data-action="collapse"></a>
		                		<a class="list-icons-item" data-action="reload"></a>
		                		<a class="list-icons-item" data-action="remove"></a>
		                	</div>
	                	</div>
					</div>

					<div class="card-body">
						Seed project includes the most basic components that can help you in development process - basic grid example, card, table and form layouts with standard components. Nothing extra. Easily turn on and off styles of different components in <code>_config.scss</code> file so that your CSS is always as clean as possible. Bootstrap components are always enabled though.
					</div>

					<div class="table-responsive">
						<table class="table">
							<thead>
								<tr>
									<th>#</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Username</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Eugene</td>
									<td>Kopyov</td>
									<td>@Kopyov</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Victoria</td>
									<td>Baker</td>
									<td>@Vicky</td>
								</tr>
								<tr>
									<td>3</td>
									<td>James</td>
									<td>Alexander</td>
									<td>@Alex</td>
								</tr>
								<tr>
									<td>4</td>
									<td>Franklin</td>
									<td>Morrison</td>
									<td>@Frank</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- /basic table -->


				<!-- Form layouts -->
				<div class="row">
					<div class="col-md-6">

						<!-- Horizontal form -->
						<div class="card">
							<div class="card-header header-elements-inline">
								<h5 class="card-title">Horizontal form</h5>
								<div class="header-elements">
									<div class="list-icons">
				                		<a class="list-icons-item" data-action="collapse"></a>
				                		<a class="list-icons-item" data-action="reload"></a>
				                		<a class="list-icons-item" data-action="remove"></a>
				                	</div>
			                	</div>
		                	</div>

							<div class="card-body">
								<form action="#">
									<div class="form-group row">
										<label class="col-lg-3 col-form-label">Text input</label>
										<div class="col-lg-9">
											<input type="text" class="form-control">
										</div>
									</div>

									<div class="form-group row">
										<label class="col-lg-3 col-form-label">Password</label>
										<div class="col-lg-9">
											<input type="password" class="form-control">
										</div>
									</div>

			                        <div class="form-group row">
			                        	<label class="col-lg-3 col-form-label">Select</label>
			                        	<div class="col-lg-9">
				                            <select name="select" class="form-control">
				                                <option value="opt1">Basic select</option>
				                                <option value="opt2">Option 2</option>
				                                <option value="opt3">Option 3</option>
				                                <option value="opt4">Option 4</option>
				                                <option value="opt5">Option 5</option>
				                                <option value="opt6">Option 6</option>
				                                <option value="opt7">Option 7</option>
				                                <option value="opt8">Option 8</option>
				                            </select>
			                            </div>
			                        </div>

									<div class="form-group row">
										<label class="col-lg-3 col-form-label">Textarea</label>
										<div class="col-lg-9">
											<textarea rows="5" cols="5" class="form-control" placeholder="Default textarea"></textarea>
										</div>
									</div>

									<div class="text-right">
										<button type="submit" class="btn btn-primary">Submit form <i class="icon-paperplane ml-2"></i></button>
									</div>
								</form>
							</div>
						</div>
						<!-- /horizotal form -->

					</div>

					<div class="col-md-6">

						<!-- Vertical form -->
						<div class="card">
							<div class="card-header header-elements-inline">
								<h5 class="card-title">Vertical form</h5>
								<div class="header-elements">
									<div class="list-icons">
				                		<a class="list-icons-item" data-action="collapse"></a>
				                		<a class="list-icons-item" data-action="reload"></a>
				                		<a class="list-icons-item" data-action="remove"></a>
				                	</div>
			                	</div>
		                	</div>

							<div class="card-body">
								<form action="#">
									<div class="form-group">
										<label>Text input</label>
										<input type="text" class="form-control">
									</div>

			                        <div class="form-group">
			                        	<label>Select</label>
			                            <select name="select" class="form-control">
			                                <option value="opt1">Basic select</option>
			                                <option value="opt2">Option 2</option>
			                                <option value="opt3">Option 3</option>
			                                <option value="opt4">Option 4</option>
			                                <option value="opt5">Option 5</option>
			                                <option value="opt6">Option 6</option>
			                                <option value="opt7">Option 7</option>
			                                <option value="opt8">Option 8</option>
			                            </select>
			                        </div>

									<div class="form-group">
										<label>Textarea</label>
										<textarea rows="4" cols="4" class="form-control" placeholder="Default textarea"></textarea>
									</div>

									<div class="text-right">
										<button type="submit" class="btn btn-primary">Submit form <i class="icon-paperplane ml-2"></i></button>
									</div>
								</form>
							</div>
						</div>
						<!-- /vertical form -->

					</div>
				</div>
				<!-- /form layouts -->

			</div>
			<!-- /content area -->


			<!-- Footer -->
			<div class="navbar navbar-expand-lg navbar-light">
				<div class="text-center d-lg-none w-100">
					<button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-footer">
						<i class="icon-unfold mr-2"></i>
						Footer
					</button>
				</div>

				<div class="navbar-collapse collapse" id="navbar-footer">
					<span class="navbar-text">
						&copy; 2015 - 2018. <a href="#">Limitless Web App Kit</a> by <a href="http://themeforest.net/user/Kopyov" target="_blank">Eugene Kopyov</a>
					</span>

					<ul class="navbar-nav ml-lg-auto">
						<li class="nav-item">
							<a href="#" class="navbar-nav-link">Text link</a>
						</li>

						<li class="nav-item">
							<a href="#" class="navbar-nav-link">
								<i class="icon-lifebuoy"></i>
							</a>
						</li>

						<li class="nav-item">
							<a href="https://themeforest.net/item/limitless-responsive-web-application-kit/13080328?ref=kopyov" class="navbar-nav-link font-weight-semibold">
								<span class="text-pink-400">
									<i class="icon-cart2 mr-2"></i>
									Purchase
								</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- /footer -->

		</div>
		<!-- /main content -->
@endsection

@section('sidebar-right')
		<!-- Right sidebar -->
		<div class="sidebar sidebar-light sidebar-right sidebar-expand-md">

			<!-- Sidebar mobile toggler -->
			<div class="sidebar-mobile-toggler text-center">
				<a href="#" class="sidebar-mobile-expand">
					<i class="icon-screen-full"></i>
					<i class="icon-screen-normal"></i>
				</a>
				<span class="font-weight-semibold">Right sidebar</span>
				<a href="#" class="sidebar-mobile-right-toggle">
					<i class="icon-arrow-right8"></i>
				</a>
			</div>
			<!-- /sidebar mobile toggler -->


			<!-- Sidebar content -->
			<div class="sidebar-content">

				<!-- User info -->
				<div class="card card-body bg-blue text-center" style="background-image: url(../global_assets/images/backgrounds/panel_bg.png); background-size: contain;">
					<div class="mb-3">
						<h5 class="mb-0 mt-1">
							Victoria Davidson
						</h5>

						<span class="d-block">Head of UX</span>
					</div>

					<a href="#" class="d-inline-block mb-3">
						<img src="../global_assets/images/placeholders/placeholder.jpg" class="rounded-round" width="110" height="110" alt="">
					</a>

					<ul class="list-inline mb-0">
						<li class="list-inline-item"><a href="#" class="btn btn-outline btn-icon text-white btn-lg border-white rounded-round">
							<i class="icon-graph"></i></a>
						</li>
						<li class="list-inline-item"><a href="#" class="btn btn-outline btn-icon text-white btn-lg border-white rounded-round">
							<i class="icon-bubble2"></i></a>
						</li>
						<li class="list-inline-item"><a href="#" class="btn btn-outline btn-icon text-white btn-lg border-white rounded-round">
							<i class="icon-switch"></i></a>
						</li>
					</ul>
				</div>
				<!-- /user info -->


				<!-- Date stamp -->
				<div class="card">
					<div class="card-body pb-0">
						<h4 class="font-weight-light mb-0">
							Thursday
							<span class="d-block">14<sup>th</sup> December</span>
						</h4>
					</div>
				</div>
				<!-- /date stamp -->


				<!-- Sub navigation -->
				<div class="card mb-2 mt-3">
					<div class="card-header bg-transparent header-elements-inline">
						<span class="text-uppercase font-size-sm font-weight-semibold">Navigation</span>
						<div class="header-elements">
							<div class="list-icons">
		                		<a class="list-icons-item" data-action="collapse"></a>
	                		</div>
                		</div>
					</div>

					<div class="card-body p-0">
						<ul class="nav nav-sidebar" data-nav-type="accordion">
							<li class="nav-item-header">Actions</li>
							<li class="nav-item">
								<a href="#" class="nav-link"><i class="icon-googleplus5"></i> Create task</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link"><i class="icon-portfolio"></i> Create project</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link"><i class="icon-compose"></i> Edit task list</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link">
									<i class="icon-user-plus"></i>
									Assign users
									<span class="badge bg-primary badge-pill ml-auto">94 online</span>
								</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link"><i class="icon-collaboration"></i> Create team</a>
							</li>
							<li class="nav-item-header">Navigate</li>
							<li class="nav-item">
								<a href="#" class="nav-link"><i class="icon-files-empty"></i> All tasks</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link">
									<i class="icon-file-plus"></i>
									Active tasks
									<span class="badge bg-dark badge-pill ml-auto">28</span>
								</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link"><i class="icon-file-check"></i> Closed tasks</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link">
									<i class="icon-reading"></i>
									Assigned to me
									<span class="badge bg-info badge-pill ml-auto">86</span>
								</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link">
									<i class="icon-make-group"></i>
									Assigned to my team
									<span class="badge bg-danger badge-pill ml-auto">47</span>
								</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link"><i class="icon-cog3"></i> Settings</a>
							</li>
						</ul>
					</div>
				</div>
				<!-- /sub navigation -->


				<!-- Online users -->
				<div class="card">
					<div class="card-header bg-transparent header-elements-inline">
						<span class="text-uppercase font-size-sm font-weight-semibold">Online users</span>
						<div class="header-elements">
							<div class="list-icons">
		                		<a class="list-icons-item" data-action="collapse"></a>
	                		</div>
                		</div>
					</div>

					<div class="card-body">
						<ul class="media-list">
							<li class="media">
								<a href="#" class="mr-3">
									<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
								</a>
								<div class="media-body">
									<a href="#" class="media-title font-weight-semibold">James Alexander</a>
									<span class="font-size-xs text-muted d-block">Santa Ana, CA.</span>
								</div>
								<div class="ml-3 align-self-center">
									<span class="badge badge-mark border-success"></span>
								</div>
							</li>

							<li class="media">
								<a href="#" class="mr-3">
									<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
								</a>
								<div class="media-body">
									<a href="#" class="media-title font-weight-semibold">Jeremy Victorino</a>
									<span class="font-size-xs text-muted d-block">Dowagiac, MI.</span>
								</div>
								<div class="ml-3 align-self-center">
									<span class="badge badge-mark border-danger"></span>
								</div>
							</li>

							<li class="media">
								<a href="#" class="mr-3">
									<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
								</a>
								<div class="media-body">
									<a href="#" class="media-title font-weight-semibold">Margo Baker</a>
									<span class="font-size-xs text-muted d-block">Kasaan, AK.</span>
								</div>
								<div class="ml-3 align-self-center">
									<span class="badge badge-mark border-success"></span>
								</div>
							</li>

							<li class="media">
								<a href="#" class="mr-3">
									<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
								</a>
								<div class="media-body">
									<a href="#" class="media-title font-weight-semibold">Beatrix Diaz</a>
									<span class="font-size-xs text-muted d-block">Neenah, WI.</span>
								</div>
								<div class="ml-3 align-self-center">
									<span class="badge badge-mark border-warning"></span>
								</div>
							</li>

							<li class="media">
								<a href="#" class="mr-3">
									<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
								</a>
								<div class="media-body">
									<a href="#" class="media-title font-weight-semibold">Richard Vango</a>
									<span class="font-size-xs text-muted d-block">Grapevine, TX.</span>
								</div>
								<div class="ml-3 align-self-center">
									<span class="badge badge-mark border-grey-400"></span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!-- /online-users -->


				<!-- Latest updates -->
				<div class="card">
					<div class="card-header bg-transparent header-elements-inline">
						<span class="text-uppercase font-size-sm font-weight-semibold">Latest updates</span>
						<div class="header-elements">
							<div class="list-icons">
		                		<a class="list-icons-item" data-action="collapse"></a>
	                		</div>
                		</div>
					</div>

					<div class="card-body">
						<ul class="media-list">
							<li class="media">
								<div class="mr-3">
									<a href="#" class="btn bg-transparent border-primary text-primary rounded-round border-2 btn-icon">
										<i class="icon-git-pull-request"></i>
									</a>
								</div>

								<div class="media-body">
									Drop the IE <a href="#">specific hacks</a> for temporal inputs
									<div class="text-muted font-size-sm">4 minutes ago</div>
								</div>
							</li>

							<li class="media">
								<div class="mr-3">
									<a href="#" class="btn bg-transparent border-warning text-warning rounded-round border-2 btn-icon">
										<i class="icon-git-commit"></i>
									</a>
								</div>

								<div class="media-body">
									Add full font overrides for popovers and tooltips
									<div class="text-muted font-size-sm">36 minutes ago</div>
								</div>
							</li>

							<li class="media">
								<div class="mr-3">
									<a href="#" class="btn bg-transparent border-info text-info rounded-round border-2 btn-icon">
										<i class="icon-git-branch"></i>
									</a>
								</div>

								<div class="media-body">
									<a href="#">Chris Arney</a> created a new <span class="font-weight-semibold">Design</span> branch
									<div class="text-muted font-size-sm">2 hours ago</div>
								</div>
							</li>

							<li class="media">
								<div class="mr-3">
									<a href="#" class="btn bg-transparent border-success text-success rounded-round border-2 btn-icon">
										<i class="icon-git-merge"></i>
									</a>
								</div>

								<div class="media-body">
									<a href="#">Eugene Kopyov</a> merged <span class="font-weight-semibold">Master</span> and <span class="font-weight-semibold">Dev</span> branches
									<div class="text-muted font-size-sm">Dec 18, 18:36</div>
								</div>
							</li>

							<li class="media">
								<div class="mr-3">
									<a href="#" class="btn bg-transparent border-primary text-primary rounded-round border-2 btn-icon">
										<i class="icon-git-pull-request"></i>
									</a>
								</div>

								<div class="media-body">
									Have Carousel ignore keyboard events
									<div class="text-muted font-size-sm">Dec 12, 05:46</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!-- /latest updates -->


				<!-- Filter -->
				<div class="card">
					<div class="card-header bg-transparent header-elements-inline">
						<span class="text-uppercase font-size-sm font-weight-semibold">Filter</span>
						<div class="header-elements">
							<div class="list-icons">
		                		<a class="list-icons-item" data-action="collapse"></a>
	                		</div>
                		</div>
					</div>

					<div class="card-body">
						<form action="#">
							<div class="form-group">
								<div class="form-check form-check-right">
									<label class="form-check-label">
										<input type="checkbox" class="form-input-styled" checked data-fouc>
										Free People
									</label>
								</div>

								<div class="form-check form-check-right">
									<label class="form-check-label">
										<input type="checkbox" class="form-input-styled" data-fouc>
										GAP
									</label>
								</div>

								<div class="form-check form-check-right">
									<label class="form-check-label">
										<input type="checkbox" class="form-input-styled" checked data-fouc>
										Lane Bryant
									</label>
								</div>

								<div class="form-check form-check-right">
									<label class="form-check-label">
										<input type="checkbox" class="form-input-styled" checked data-fouc>
										Ralph Lauren
									</label>
								</div>

								<div class="form-check form-check-right">
									<label class="form-check-label">
										<input type="checkbox" class="form-input-styled" data-fouc>
										Liz Claiborne
									</label>
								</div>
							</div>
						</form>
					</div>
				</div>
				<!-- /filter -->


				<!-- Contacts -->
				<div class="card">
					<div class="card-header bg-transparent header-elements-inline">
						<span class="text-uppercase font-size-sm font-weight-semibold">Contacts</span>
						<div class="header-elements">
							<div class="list-icons">
		                		<a class="list-icons-item" data-action="collapse"></a>
	                		</div>
                		</div>
					</div>

					<div class="card-body">
						<ul class="media-list">
							<li class="media">
								<a href="#" class="mr-3 position-relative">
									<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
									<span class="badge badge-info badge-pill badge-float">6</span>
								</a>

								<div class="media-body align-self-center">
									Rebecca Jameson
								</div>

								<div class="ml-3 align-self-center">
									<div class="dropdown">
										<a href="#" class="text-default dropdown-toggle caret-0" data-toggle="dropdown"><i class="icon-more2"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Start chat</a>
											<a href="#" class="dropdown-item"><i class="icon-phone2"></i> Make a call</a>
											<a href="#" class="dropdown-item"><i class="icon-mail5"></i> Send mail</a>
											<div class="dropdown-divider"></div>
											<a href="#" class="dropdown-item"><i class="icon-statistics"></i> Statistics</a>
										</div>
									</div>
								</div>
							</li>

							<li class="media">
								<a href="#" class="mr-3 position-relative">
									<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
									<span class="badge badge-info badge-pill badge-float">9</span>
								</a>

								<div class="media-body align-self-center">
									Walter Sommers
								</div>

								<div class="ml-3 align-self-center">
									<div class="dropdown">
										<a href="#" class="text-default dropdown-toggle caret-0" data-toggle="dropdown"><i class="icon-more2"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Start chat</a>
											<a href="#" class="dropdown-item"><i class="icon-phone2"></i> Make a call</a>
											<a href="#" class="dropdown-item"><i class="icon-mail5"></i> Send mail</a>
											<div class="dropdown-divider"></div>
											<a href="#" class="dropdown-item"><i class="icon-statistics"></i> Statistics</a>
										</div>
									</div>
								</div>
							</li>

							<li class="media">
								<a href="#" class="mr-3">
									<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
								</a>

								<div class="media-body align-self-center">
									Otto Gerwald
								</div>

								<div class="ml-3 align-self-center">
									<div class="dropdown">
										<a href="#" class="text-default dropdown-toggle caret-0" data-toggle="dropdown"><i class="icon-more2"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Start chat</a>
											<a href="#" class="dropdown-item"><i class="icon-phone2"></i> Make a call</a>
											<a href="#" class="dropdown-item"><i class="icon-mail5"></i> Send mail</a>
											<div class="dropdown-divider"></div>
											<a href="#" class="dropdown-item"><i class="icon-statistics"></i> Statistics</a>
										</div>
									</div>
								</div>
							</li>

							<li class="media">
								<a href="#" class="mr-3">
									<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
								</a>

								<div class="media-body align-self-center">
									Vince Satmann
								</div>

								<div class="ml-3 align-self-center">
									<div class="dropdown">
										<a href="#" class="text-default dropdown-toggle caret-0" data-toggle="dropdown"><i class="icon-more2"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Start chat</a>
											<a href="#" class="dropdown-item"><i class="icon-phone2"></i> Make a call</a>
											<a href="#" class="dropdown-item"><i class="icon-mail5"></i> Send mail</a>
											<div class="dropdown-divider"></div>
											<a href="#" class="dropdown-item"><i class="icon-statistics"></i> Statistics</a>
										</div>
									</div>
								</div>
							</li>

							<li class="media">
								<a href="#" class="mr-3">
									<img src="../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
								</a>

								<div class="media-body align-self-center">
									Jason Leroy
								</div>

								<div class="ml-3 align-self-center">
									<div class="dropdown">
										<a href="#" class="text-default dropdown-toggle caret-0" data-toggle="dropdown"><i class="icon-more2"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Start chat</a>
											<a href="#" class="dropdown-item"><i class="icon-phone2"></i> Make a call</a>
											<a href="#" class="dropdown-item"><i class="icon-mail5"></i> Send mail</a>
											<div class="dropdown-divider"></div>
											<a href="#" class="dropdown-item"><i class="icon-statistics"></i> Statistics</a>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!-- /contacts -->

			</div>
			<!-- /sidebar content -->

		</div>
		<!-- /right sidebar -->
@endsection
