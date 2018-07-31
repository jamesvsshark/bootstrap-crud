import Bootstrap from '../bootstrap';

export const routeBuilder = (routeName, context) => {
	const App = Bootstrap.app;

	console.info(`Setting up routes for ${routeName}...`);
    
	App.get(`/${routeName}/:id`, (req, res) => {
		context.model.findById(req.params.id, (err, data) => {
			if (err || !data) {
				return res.status(404).json({
					message: 'Resource not found'
				});
			}
            
			return res.status(200).json({
				data: data
			});
		});
	});

	App.get(`/${routeName}`, (req, res) => {
		context.model.find({}, (err, data) => {
			if (err) {
				return res.status(500).json({
					error: err
				});
			}

			return res.status(200).json({
				data: data
			});
		});
	});

	App.post(`/${routeName}`, (req, res) => {
		if (req.body._id) {
			delete req.body._id;
		}

		context.model.create(req.body, (err, data) => {
			if (err) {
				return res.status(500).json({
					error: err
				});
			}

			return res.status(201).json({
				data: data
			});
		});
	});

	App.put(`/${routeName}/:id`, (req, res) => {
		if (req.body._id) {
			delete req.body._id;
		}
        
		context.model.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		}, (err, data) => {
			if (err) {
				return res.status(500).json({
					error: err
				});
			}

			if (!data) {
				return res.status(404).json({
					message: 'Resource not found'
				});
			}

			return res.status(201).json({
				data: data
			});
		});
	});

	App.delete(`/${routeName}/:id`, (req, res) => {
		context.model.findByIdAndRemove(req.params.id, (err, data) => {
			if (err) {
				return res.status(500).json({
					error: err
				});
			}

			if (!data) {
				return res.status(404).json({
					message: 'Resource not found'
				});
			}

			return res.status(200).json({
				data: data
			});
		});
	});
};