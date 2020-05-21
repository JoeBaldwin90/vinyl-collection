class controller {
  static getAll = async (req, res) => {
    try {
      const vinyls = await Vinyl.find();
      res.json(vinyls);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  static getOne = async (req, res) => {
    res.json(res.vinyl);
  };

  static post = async (req, res) => {
    const vinyl = new Vinyl(req.body);
    try {
      const newVinyl = await vinyl.save();
      res.status(201).json(newVinyl);
    } catch {
      res.status(400).json({ message: err.message });
    }
  };

  static patch = async (req, res) => {
    const { vinyl } = res;

    if (req.body._id) {
      delete req.body._id;
    }

    // Update vinyl object
    Object.entries(req.body).forEach((item) => {
      const key = item[0];
      const value = item[1];
      vinyl[key] = value;
    });

    vinyl.save((err) => {
      if (err) {
        res.status(400).json({ message: err.message });
      }
      return res.json(vinyl);
    });
  };

  static delete = async (req, res) => {
    try {
      await res.vinyl.remove();
      res.json({ message: "Deleted vinyl from collection" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
}

export default controller;
