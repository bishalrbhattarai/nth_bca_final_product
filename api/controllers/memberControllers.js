import Member from "../models/member.model.js";
const allMembers = async (req, res) => {
  try {
    console.log("Req ayo hai! ayo !!");
    const members = await Member.findAll();
    console.log("Members:");
    console.log(members);

    return res.json({
      success: true,
      members,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const addMember = async (req, res) => {
  try {
    // Extract data from the request body
    const {
      memberId,
      cardNumber,
      name,
      Address,
      Phone,
      designation,
      citizenshipNumber,
      firmName,
    } = req.body;

    // Create a new member record using Sequelize
    const newMember = await Member.create({
      memberId,
      cardNumber,
      name,
      Address,
      Phone,
      designation,
      citizenshipNumber,
      firmName,
    });

    // If member creation is successful, send a success response
    return res.status(201).json({
      success: true,
      message: "Member added successfully",
      member: newMember, // Optionally, you can send the newly created member object in the response
    });
  } catch (error) {
    // Check if the error is a Sequelize validation error
    if (error.name === "SequelizeUniqueConstraintError") {
      // Handle uniqueness constraint violation error
      return res.status(400).json({
        success: false,
        message: "Member ID, Phone, or Citizenship Number Should be unique",
      });
    }
    // If the error is not related to uniqueness constraint, send a generic error response
    console.error("Error adding member:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const deleteMember = async (req, res) => {
  const { selectedMemberId } = req.body;
  console.log("the selectermMber ID", selectedMemberId);
  try {
    // Find the member by ID and delete it
    const result = await Member.destroy({
      where: {
        id: selectedMemberId,
      },
    });
    console.log("the result from result");
    console.log(result);

    const members = await Member.findAll();

    // If deletion is successful, send a success response
    return res.json({
      success: true,
      members,
      message: "Member deleted successfully",
    });
  } catch (error) {
    // If an error occurs, send an error response
    console.error("Error deleting member:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const getMember = async (req, res) => {
  const { id } = req.body;
  try {
    const member = await Member.findOne({ where: { id } });

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    return res.status(200).json({
      success: true,
      member,
    });
  } catch (error) {
    console.error("Error fetching member:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const updateData = async (req, res) => {
  try {
    const { id, name, Address, Phone, designation, firmName } = req.body;

    // Find the member in your database by id
    const existingMember = await Member.findByPk(id);

    if (!existingMember) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    // Update member properties
    existingMember.name = name;
    existingMember.Address = Address;
    existingMember.Phone = Phone;
    existingMember.designation = designation;
    existingMember.firmName = firmName;

    // Save the updated member
    await existingMember.save();

    return res.status(200).json({
      success: true,
      message: "Member data updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { allMembers, addMember, deleteMember, getMember, updateData };
