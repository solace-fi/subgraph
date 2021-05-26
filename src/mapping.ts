import { BigInt } from "@graphprotocol/graph-ts"
import {
  Vault,
  Approval,
  ClaimProcessed,
  // DepositMade 
  EmergencyShutdown,
  GovernanceTransferred,
  StrategyAdded,
  StrategyAddedToQueue,
  StrategyRemovedFromQueue,
  StrategyReported,
  StrategyRevoked,
  StrategyUpdateDebtRatio,
  StrategyUpdateMaxDebtPerHarvest,
  StrategyUpdateMinDebtPerHarvest,
  StrategyUpdatePerformanceFee,
  Transfer,
  UpdateWithdrawalQueue,
  WithdrawalMade
} from "../generated/Vault/Vault"
import { DepositMade } from "../generated/schema"

// export function handleApproval(event: Approval): void {
//   // Entities can be loaded from the store using a string ID; this ID
//   // needs to be unique across all entities of the same type
//   let entity = ExampleEntity.load(event.transaction.from.toHex())

//   // Entities only exist after they have been saved to the store; 
//   // `null` checks allow to create entities on demand
//   if (entity == null) {
//     entity = new ExampleEntity(event.transaction.from.toHex())

//     // Entity fields can be set using simple assignments
//     entity.count = BigInt.fromI32(0)
//   }

//   // BigInt and BigDecimal math are supported
//   entity.count = entity.count + BigInt.fromI32(1)

//   // Entity fields can be set based on event parameters
//   entity.owner = event.params.owner
//   entity.spender = event.params.spender

//   // Entities can be written to the store with `.save()`
//   entity.save()

//   // Note: If a handler doesn't require existing field values, it is faster
//   // _not_ to load the entity from the store. Instead, create it fresh with
//   // `new Entity(...)`, set the fields that should be updated and save the
//   // entity back to the store. Fields that were not set or unset remain
//   // unchanged, allowing for partial updates to be applied.

//   // It is also possible to access smart contracts from mappings. For
//   // example, the contract that has emitted the event can be connected to
//   // with:
//   //
//   // let contract = Contract.bind(event.address)
//   //
//   // The following functions can then be called on this contract to access
//   // state variables and other data:
//   //
//   // - contract.DOMAIN_SEPARATOR(...)
//   // - contract.activation(...)
//   // - contract.allowance(...)
//   // - contract.approve(...)
//   // - contract.balanceOf(...)
//   // - contract.creditAvailable(...)
//   // - contract.debtOutstanding(...)
//   // - contract.debtRatio(...)
//   // - contract.decimals(...)
//   // - contract.decreaseAllowance(...)
//   // - contract.delegatedAssets(...)
//   // - contract.emergencyShutdown(...)
//   // - contract.expectedReturn(...)
//   // - contract.governance(...)
//   // - contract.increaseAllowance(...)
//   // - contract.lastReport(...)
//   // - contract.lockedProfit(...)
//   // - contract.lockedProfitDegration(...)
//   // - contract.managementFee(...)
//   // - contract.maxRedeemableShares(...)
//   // - contract.minCapitalRequirement(...)
//   // - contract.name(...)
//   // - contract.newGovernance(...)
//   // - contract.nonces(...)
//   // - contract.performanceFee(...)
//   // - contract.registry(...)
//   // - contract.report(...)
//   // - contract.rewards(...)
//   // - contract.strategies(...)
//   // - contract.symbol(...)
//   // - contract.token(...)
//   // - contract.totalAssets(...)
//   // - contract.totalDebt(...)
//   // - contract.totalSupply(...)
//   // - contract.transfer(...)
//   // - contract.transferFrom(...)
//   // - contract.withdraw(...)
//   // - contract.withdrawalQueue(...)
// }

export function handleClaimProcessed(event: ClaimProcessed): void {}

export function handleDepositMade(event: DepositMade): void {
  let depositMade = new DepositMade(event.depositor.toHexString());

  let depositer = depositMade.depositor.toHexString();
  let amount = depositMade.amount;
  let shares = depositMade.shares;

  depositMade.save();
}

export function handleEmergencyShutdown(event: EmergencyShutdown): void {}

export function handleGovernanceTransferred(
  event: GovernanceTransferred
): void {}

export function handleStrategyAdded(event: StrategyAdded): void {}

export function handleStrategyAddedToQueue(event: StrategyAddedToQueue): void {}

export function handleStrategyRemovedFromQueue(
  event: StrategyRemovedFromQueue
): void {}

export function handleStrategyReported(event: StrategyReported): void {}

export function handleStrategyRevoked(event: StrategyRevoked): void {}

export function handleStrategyUpdateDebtRatio(
  event: StrategyUpdateDebtRatio
): void {}

export function handleStrategyUpdateMaxDebtPerHarvest(
  event: StrategyUpdateMaxDebtPerHarvest
): void {}

export function handleStrategyUpdateMinDebtPerHarvest(
  event: StrategyUpdateMinDebtPerHarvest
): void {}

export function handleStrategyUpdatePerformanceFee(
  event: StrategyUpdatePerformanceFee
): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUpdateWithdrawalQueue(
  event: UpdateWithdrawalQueue
): void {}

export function handleWithdrawalMade(event: WithdrawalMade): void {}
